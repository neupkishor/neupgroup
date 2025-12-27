import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LegalPage() {
  return (
    <div className="container py-8 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-2 mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight font-headline">Legal Information</h1>
          <p className="text-muted-foreground">
            Terms of Service and Privacy Policy for Neup Group.
          </p>
        </div>

        <div className="space-y-12">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Terms of Service</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Welcome to Neup Group. By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
              <h3 className="font-semibold text-foreground pt-4">1. Use of Our Services</h3>
              <p>
                You may use our services only as permitted by law. We may suspend or stop providing our services to you if you do not comply with our terms or policies or if we are investigating suspected misconduct.
              </p>
              <h3 className="font-semibold text-foreground pt-4">2. Intellectual Property</h3>
              <p>
                All content, trademarks, and data on this site, including software, databases, text, graphics, icons, and hyperlinks, are the property of or licensed to Neup Group and as such are protected from infringement by local and international legislation and treaties.
              </p>
              <h3 className="font-semibold text-foreground pt-4">3. Limitation of Liability</h3>
              <p>
                Neup Group will not be liable for any direct, indirect, incidental, special, or consequential damages arising from the use or inability to use our services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Your privacy is important to us. It is Neup Group's policy to respect your privacy regarding any information we may collect from you across our website.
              </p>
              <h3 className="font-semibold text-foreground pt-4">1. Information We Collect</h3>
              <p>
                We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
              </p>
              <h3 className="font-semibold text-foreground pt-4">2. How We Use Information</h3>
              <p>
                We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect Neup Group and our users.
              </p>
              <h3 className="font-semibold text-foreground pt-4">3. Security</h3>
              <p>
                We are committed to protecting the security of your personal information. We use a variety of security technologies and procedures to help protect your personal information from unauthorized access, use, or disclosure.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
