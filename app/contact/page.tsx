import { Button } from "@/components/ui/Button";

/*
  Contact / demo request page.
  This page is currently frontend-only. A backend email/API handler can be
  added later when the contact form is ready to actually submit messages.
*/
export default function ContactPage() {
  return (
    <section className="bg-gradient-to-br from-white via-slate-50 to-blue-50 px-6 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
            Private Demo
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Request a private demo.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
           See how Bankruptcy Control helps creditors, lenders, and the firms
            that support them manage bankruptcy cases, notices, documents,
            tasks, reporting, and internal workflow activity after a bankruptcy
            event occurs.
          </p>

          <p className="mt-5 text-base leading-7 text-slate-600">
           Demo conversations use sanitized sample data and can be tailored to
          lender, creditor, servicing, specialty finance, or creditor-side law
          firm workflows.
          </p>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-950">
              Contact information
            </h2>

            <div className="mt-5 space-y-3 text-base leading-7 text-slate-600">
              <p>
                <span className="font-semibold text-slate-900">Company:</span>{" "}
                Bankruptcy Control
              </p>
              <p>
                <span className="font-semibold text-slate-900">Email:</span>{" "}
                <a
                  href="mailto:info@bankruptcycontrol.com"
                  className="text-blue-700 hover:text-blue-800"
                >
                  info@bankruptcycontrol.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-slate-900">Phone:</span>{" "}
                (___) ___-____
              </p>
              <p>
                <span className="font-semibold text-slate-900">Location:</span>{" "}
                Dallas, Texas
              </p>
            </div>

            <div className="mt-6">
              <Button href="/bankruptcy-control.vcf" variant="secondary">
                Download Contact Card
              </Button>
            </div>
          </div>
        </div>

        <form className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/10 sm:p-8">
          <div>
            <h2 className="text-2xl font-semibold text-slate-950">
              Demo request form
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Tell us a little about your organization and bankruptcy workflow
              needs.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <FormField label="Name" name="name" type="text" required />
            <FormField label="Company" name="company" type="text" required />
            <FormField label="Email" name="email" type="email" required />
            <FormField label="Phone" name="phone" type="tel" />
            <FormField label="Role / Title" name="role" type="text" />

            <label className="block">
              <span className="text-base font-semibold text-slate-800">
                Company Type
              </span>
              <select
                name="companyType"
                className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                defaultValue=""
              >
                <option value="" disabled>
                  Select company type
                </option>
                <option>Consumer lender</option>
                <option>Title / auto lender</option>
                <option>Manufactured / mobile home lender</option>
                <option>Credit union / regional lender</option>
                <option>Secured creditor</option>
                <option>Creditor-side law firm</option>
                <option>Specialty finance company</option>
                <option>Other</option>
              </select>
            </label>

            <label className="block">
              <span className="text-base font-semibold text-slate-800">
                Estimated Active Bankruptcy Case Volume
              </span>
              <select
                name="caseVolume"
                className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                defaultValue=""
              >
                <option value="" disabled>
                  Select case volume
                </option>
                <option>Under 250</option>
                <option>250–1,000</option>
                <option>1,000–3,000</option>
                <option>3,000+</option>
                <option>Not sure</option>
              </select>
            </label>

            <label className="block">
              <span className="text-base font-semibold text-slate-800">
                Deployment Interest
              </span>
              <select
                name="deploymentInterest"
                className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                defaultValue=""
              >
                <option value="" disabled>
                  Select deployment interest
                </option>
                <option>Bankruptcy Control-hosted SaaS</option>
                <option>Dedicated cloud environment</option>
                <option>Client-controlled deployment</option>
                <option>Not sure</option>
              </select>
            </label>
          </div>

          <label className="mt-5 block">
            <span className="text-base font-semibold text-slate-800">
              Message
            </span>
            <textarea
              name="message"
              rows={6}
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              placeholder="Tell us about your bankruptcy workflow, case volume, current process, or demo goals."
            />
          </label>

            {/* Sensitive information warning.
              The public website form should not be used to collect borrower,
              account, court, Social Security, or other sensitive personal data.
              A secure intake process can be designed later if needed.
            */}
            
          <p className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-base leading-7 text-amber-900">
            Please do not submit Social Security numbers, borrower account
            numbers, court documents, or other sensitive personal information
            through this form.
          </p>

          <label className="mt-5 flex gap-3 text-base leading-7 text-slate-700">
            <input
              type="checkbox"
              required
              className="mt-1 h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />
            <span>
              I understand that sensitive borrower, account, court, or personal
              information should not be submitted through this form.
            </span>
          </label>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
            >
              Submit Demo Request
            </button>

            <a
              href="/bankruptcy-control.vcf"
              download
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:border-blue-300 hover:bg-blue-50"
            >
              Download vCard
            </a>
          </div>

          <p className="mt-5 text-base leading-7 text-slate-500">
            This form layout is ready for frontend review. A secure backend
            handler can be connected later before production launch.
          </p>
        </form>
      </div>
    </section>
  );
}

type FormFieldProps = {
  label: string;
  name: string;
  type: string;
  required?: boolean;
};

function FormField({ label, name, type, required = false }: FormFieldProps) {
  return (
    <label className="block">
      <span className="text-base font-semibold text-slate-800">
        {label}
        {required && <span className="text-blue-700"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      />
    </label>
  );
}