import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const Login = () => {
  return (
   <div className="flex w-full  items-center justify-center">
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="Login">
        <TabsList>
          <TabsTrigger value="Signup">Signup</TabsTrigger>
          <TabsTrigger value="Login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="Signup">
          <Card>
            <CardHeader>
              <CardTitle>Signup</CardTitle>
              <CardDescription>
                Create a new account and click signup when you are done.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-name">Name</Label>
                <Input type="text" placeholder="Eg. Peter" required="true" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-name">Email</Label>
                <Input type="email" placeholder="Eg. example123@gmail.com" required="true" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-username">Password</Label>
                <Input type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Signup</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="Login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Login your password here. After signup, you'll be logged in. 
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-current">Email</Label>
                <Input type="email" placeholder="Eg. example123@gmail.com" required="true" />
                
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-new">Password</Label>
                <Input type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
   </div>
  )
}


export default Login; 
