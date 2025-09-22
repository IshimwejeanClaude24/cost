import { Separator } from "@/components/ui/separator"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Settings</h3>
        <p className="text-sm text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>
      <Separator />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <h4 className="font-medium">Profile</h4>
          <p className="text-sm text-muted-foreground">Update your personal information.</p>
        </div>
        <div className="md:col-span-2">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <Button>Update Profile</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Separator />
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <h4 className="font-medium">Appearance</h4>
          <p className="text-sm text-muted-foreground">Customize the look and feel of the app.</p>
        </div>
        <div className="md:col-span-2">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Theme</Label>
                  <RadioGroup defaultValue="light" className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="light" id="r1" />
                      <Label htmlFor="r1">Light</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="dark" id="r2" />
                      <Label htmlFor="r2">Dark</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="system" id="r3" />
                      <Label htmlFor="r3">System</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Separator />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <h4 className="font-medium">Notifications</h4>
          <p className="text-sm text-muted-foreground">Configure how you receive notifications.</p>
        </div>
        <div className="md:col-span-2">
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="email-notifications" defaultChecked />
                <Label htmlFor="email-notifications">Receive email notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="push-notifications" />
                <Label htmlFor="push-notifications">Receive push notifications</Label>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
