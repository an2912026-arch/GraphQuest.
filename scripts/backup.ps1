
# Backup configuration files for GraphQuest

$projectPath = Split-Path -Parent $PSScriptRoot
$backupDir = Join-Path $projectPath "backups"

New-Item -ItemType Directory -Force -Path $backupDir | Out-Null

$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$backupFile = Join-Path $backupDir "backup_$timestamp.zip"

$files = @(
    "package.json",
    ".env.example"
) | ForEach-Object {
    Join-Path $projectPath $_
} | Where-Object {
    Test-Path $_
}

Compress-Archive -LiteralPath $files -DestinationPath $backupFile

Write-Host "Backup completed successfully!"
Write-Host "Backup file: $backupFile"
