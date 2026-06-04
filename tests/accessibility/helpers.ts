import type { Result } from "axe-core";

/**
 * Format accessibility violations into a detailed, readable report.
 */
export function formatViolations(violations: Result[]): string {
  if (violations.length === 0) {
    return "\n✅ No accessibility violations found!\n";
  }

  let report = "\n" + "═".repeat(100) + "\n";
  report += `  🔍 ACCESSIBILITY REPORT - ${violations.length} VIOLATION${violations.length > 1 ? "S" : ""} FOUND\n`;
  report += "═".repeat(100) + "\n\n";

  violations.forEach((violation, index) => {
    const impact = violation.impact?.toUpperCase() || "UNKNOWN";
    const impactEmoji: Record<string, string> = {
      CRITICAL: "🔴",
      SERIOUS: "🟠",
      MODERATE: "🟡",
      MINOR: "🟢",
    };

    report += `${index + 1}. ${impactEmoji[impact] ?? "⚪"} ${violation.help}\n`;
    report += "─".repeat(100) + "\n";
    report += `   Impact:       ${impact}\n`;
    report += `   Rule ID:      ${violation.id}\n`;
    report += `   WCAG Tags:    ${violation.tags.filter((tag) => tag.includes("wcag")).join(", ") || "N/A"}\n`;
    report += `   Description:  ${violation.description}\n`;
    report += `   Help URL:     ${violation.helpUrl}\n`;
    report += `   Elements:     ${violation.nodes.length} affected\n\n`;

    const nodesToShow = Math.min(violation.nodes.length, 3);
    violation.nodes.slice(0, nodesToShow).forEach((node, nodeIndex) => {
      report += `   📍 Element ${nodeIndex + 1}:\n`;
      report += `      Selector:  ${node.target.join(" ")}\n`;
      const htmlPreview = node.html.length > 120 ? node.html.substring(0, 120) + "..." : node.html;
      report += `      HTML:      ${htmlPreview.replace(/\n/g, " ")}\n`;
      const fixHint =
        node.failureSummary?.split("\n").filter((line) => line.trim())[1] ||
        "See help URL for details";
      report += `      Fix:       ${fixHint.trim()}\n`;
      if (nodeIndex < nodesToShow - 1) report += "\n";
    });

    if (violation.nodes.length > nodesToShow) {
      report += `\n   ... and ${violation.nodes.length - nodesToShow} more element(s)\n`;
    }

    report += "\n";
  });

  report += "═".repeat(100) + "\n";
  return report;
}

/**
 * Return a formatted summary table of passed / violated / incomplete checks.
 */
export function getScanSummary(
  violations: Result[],
  passes: Result[],
  incomplete: Result[]
): string {
  const totalChecks = violations.length + passes.length + incomplete.length;
  const passRate = totalChecks > 0 ? ((passes.length / totalChecks) * 100).toFixed(1) : "0";

  let summary = "\n┌" + "─".repeat(98) + "┐\n";
  summary += `│  📊 SCAN SUMMARY${" ".repeat(82)}│\n`;
  summary += "├" + "─".repeat(98) + "┤\n";
  summary += `│  ✅ Passed:      ${passes.length.toString().padEnd(6)} rules${" ".repeat(70)}│\n`;
  summary += `│  ❌ Violations:  ${violations.length.toString().padEnd(6)} rules${" ".repeat(70)}│\n`;
  summary += `│  ⚠️  Incomplete:  ${incomplete.length.toString().padEnd(6)} rules${" ".repeat(70)}│\n`;
  summary += `│  📈 Pass Rate:   ${passRate}%${" ".repeat(82 - passRate.length)}│\n`;
  summary += "└" + "─".repeat(98) + "┘\n";
  return summary;
}
