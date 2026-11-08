
# Restore backup into a safe test folder

$projectPath = Split-Path -Parent $PSScriptRoot
$backupDir = Join-Path $projectPath "backups"
$restoreDir = Join-Path $projectPath "restore-test"

$latestBackup = Get-ChildItem $backupDir -Filter "backup_*.zip" |
    Sort-Object LastWriteTime -Descending |
    Select-Object -First 1

if (-not $latestBackup) {
    Write-Host "No backup found!"
    exit 1
}

New-Item -ItemType Directory -Force -Path $restoreDir | Out-Null

Expand-Archive -LiteralPath $latestBackup.FullName `
    -DestinationPath $restoreDir -Force

Write-Host "Restore completed successfully!"
Write-Host "Restored to: $restoreDir"
