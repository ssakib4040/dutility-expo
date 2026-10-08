$ErrorActionPreference = 'Stop'

Add-Type -AssemblyName System.Drawing

$projectRoot = Split-Path -Parent $PSScriptRoot
$rawDir = Join-Path $projectRoot 'store-assets\google-play\raw'
$outputDir = Join-Path $projectRoot 'store-assets\google-play\phone-screenshots'
$backgroundPath = Join-Path $projectRoot 'store-assets\google-play\source\phone-background.png'
$semiBoldPath = Join-Path $projectRoot 'node_modules\@expo-google-fonts\ibm-plex-sans\600SemiBold\IBMPlexSans_600SemiBold.ttf'
$regularPath = Join-Path $projectRoot 'node_modules\@expo-google-fonts\ibm-plex-sans\400Regular\IBMPlexSans_400Regular.ttf'

[IO.Directory]::CreateDirectory($outputDir) | Out-Null

$slides = @(
  @{ Source = '01-catalog.png'; Output = '01-explore-tools.png'; Title = 'Explore digital tools.'; Subtitle = 'Browse by file type and task.' },
  @{ Source = '02-search-pdf.png'; Output = '02-search-catalog.png'; Title = 'Search the catalog.'; Subtitle = 'Filter tools by format, name, or task.' },
  @{ Source = '03-pdf-to-word.png'; Output = '03-inputs-and-outputs.png'; Title = 'See inputs and outputs.'; Subtitle = 'Understand each tool before you begin.' },
  @{ Source = '04-pdf-to-image.png'; Output = '04-preview-workflows.png'; Title = 'Preview each workflow.'; Subtitle = 'Know what a tool is designed to produce.' }
)

function New-RoundedPath([float]$x, [float]$y, [float]$width, [float]$height, [float]$radius) {
  $path = New-Object Drawing.Drawing2D.GraphicsPath
  $diameter = $radius * 2
  $path.AddArc($x, $y, $diameter, $diameter, 180, 90)
  $path.AddArc($x + $width - $diameter, $y, $diameter, $diameter, 270, 90)
  $path.AddArc($x + $width - $diameter, $y + $height - $diameter, $diameter, $diameter, 0, 90)
  $path.AddArc($x, $y + $height - $diameter, $diameter, $diameter, 90, 90)
  $path.CloseFigure()
  return $path
}

$semiCollection = New-Object Drawing.Text.PrivateFontCollection
$semiCollection.AddFontFile($semiBoldPath)
$regularCollection = New-Object Drawing.Text.PrivateFontCollection
$regularCollection.AddFontFile($regularPath)

$brandFont = New-Object Drawing.Font($semiCollection.Families[0], 30, [Drawing.FontStyle]::Regular, [Drawing.GraphicsUnit]::Pixel)
$titleFont = New-Object Drawing.Font($semiCollection.Families[0], 60, [Drawing.FontStyle]::Regular, [Drawing.GraphicsUnit]::Pixel)
$subtitleFont = New-Object Drawing.Font($regularCollection.Families[0], 27, [Drawing.FontStyle]::Regular, [Drawing.GraphicsUnit]::Pixel)
$whiteBrush = New-Object Drawing.SolidBrush([Drawing.Color]::White)
$softBrush = New-Object Drawing.SolidBrush([Drawing.Color]::FromArgb(224, 233, 235, 255))
$background = [Drawing.Image]::FromFile($backgroundPath)

try {
  foreach ($slide in $slides) {
    $sourcePath = Join-Path $rawDir $slide.Source
    $outputPath = Join-Path $outputDir $slide.Output
    $screen = [Drawing.Image]::FromFile($sourcePath)
    $canvas = New-Object Drawing.Bitmap 1080, 1920, ([Drawing.Imaging.PixelFormat]::Format24bppRgb)
    $graphics = [Drawing.Graphics]::FromImage($canvas)

    try {
      $graphics.SmoothingMode = [Drawing.Drawing2D.SmoothingMode]::AntiAlias
      $graphics.InterpolationMode = [Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
      $graphics.PixelOffsetMode = [Drawing.Drawing2D.PixelOffsetMode]::HighQuality
      $graphics.TextRenderingHint = [Drawing.Text.TextRenderingHint]::AntiAliasGridFit

      $backgroundScale = [Math]::Max(1080 / $background.Width, 1920 / $background.Height)
      $backgroundSourceWidth = 1080 / $backgroundScale
      $backgroundSourceHeight = 1920 / $backgroundScale
      $backgroundSourceX = ($background.Width - $backgroundSourceWidth) / 2
      $backgroundSourceY = ($background.Height - $backgroundSourceHeight) / 2
      $graphics.DrawImage(
        $background,
        [Drawing.Rectangle]::new(0, 0, 1080, 1920),
        $backgroundSourceX,
        $backgroundSourceY,
        $backgroundSourceWidth,
        $backgroundSourceHeight,
        [Drawing.GraphicsUnit]::Pixel
      )

      $topShadeRect = [Drawing.Rectangle]::new(0, 0, 1080, 390)
      $topShade = New-Object Drawing.Drawing2D.LinearGradientBrush(
        $topShadeRect,
        [Drawing.Color]::FromArgb(120, 5, 8, 45),
        [Drawing.Color]::FromArgb(0, 5, 8, 45),
        90
      )
      $graphics.FillRectangle($topShade, $topShadeRect)
      $topShade.Dispose()

      $graphics.DrawString('Dutility', $brandFont, $whiteBrush, [Drawing.PointF]::new(80, 50))
      $graphics.DrawString($slide.Title, $titleFont, $whiteBrush, [Drawing.PointF]::new(76, 103))
      $graphics.DrawString($slide.Subtitle, $subtitleFont, $softBrush, [Drawing.PointF]::new(80, 193))

      $frameX = 80
      $frameY = 300
      $frameWidth = 920
      $frameHeight = 1580
      $radius = 42

      foreach ($offset in 18, 12, 7) {
        $shadowPath = New-RoundedPath ($frameX + $offset / 3) ($frameY + $offset) $frameWidth $frameHeight $radius
        $shadowBrush = New-Object Drawing.SolidBrush([Drawing.Color]::FromArgb((28 - $offset), 3, 4, 28))
        $graphics.FillPath($shadowBrush, $shadowPath)
        $shadowBrush.Dispose()
        $shadowPath.Dispose()
      }

      $framePath = New-RoundedPath $frameX $frameY $frameWidth $frameHeight $radius
      $graphics.SetClip($framePath)

      $scale = $frameWidth / $screen.Width
      $sourceHeight = [Math]::Min($screen.Height, $frameHeight / $scale)
      $graphics.DrawImage(
        $screen,
        [Drawing.Rectangle]::new($frameX, $frameY, $frameWidth, $frameHeight),
        0,
        0,
        $screen.Width,
        $sourceHeight,
        [Drawing.GraphicsUnit]::Pixel
      )
      $graphics.ResetClip()

      $borderPen = New-Object Drawing.Pen([Drawing.Color]::FromArgb(170, 255, 255, 255), 5)
      $graphics.DrawPath($borderPen, $framePath)
      $borderPen.Dispose()
      $framePath.Dispose()

      $canvas.Save($outputPath, [Drawing.Imaging.ImageFormat]::Png)
      Write-Output $outputPath
    }
    finally {
      $graphics.Dispose()
      $canvas.Dispose()
      $screen.Dispose()
    }
  }
}
finally {
  $background.Dispose()
  $whiteBrush.Dispose()
  $softBrush.Dispose()
  $brandFont.Dispose()
  $titleFont.Dispose()
  $subtitleFont.Dispose()
  $semiCollection.Dispose()
  $regularCollection.Dispose()
}
