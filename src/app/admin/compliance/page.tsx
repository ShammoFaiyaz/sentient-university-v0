import { Card, CardTitle } from "@/components/ui/Card";

export default function AdminCompliance() {
  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-semibold text-primary">Compliance</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Card>
          <CardTitle>Accreditation</CardTitle>
          <p className="text-sm text-neutral-dark/80">Report draft ready • Evidence items: 18</p>
        </Card>
        <Card>
          <CardTitle>Privacy</CardTitle>
          <p className="text-sm text-neutral-dark/80">PII redaction checks passed</p>
        </Card>
      </div>
    </div>
  );
}


