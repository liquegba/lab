import { Heading } from './components/Heading';
import { Text} from './components/Text';
import { Logo } from './components/Logo';
import './styles/global.css';
import { TextInput } from './components/TextInput';
import { Envelope, Lock } from 'phosphor-react';
import { Checkbox } from './components/Checkbox';
import { Button } from './components/Button';

export function App() {
 return (
      <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-400100">
   
   <header className="flex flex-col items-center">
      <Logo />
          
          <Heading size="lg" className="mt-4">
            Ignite lab
          </Heading>
          
          <Text size="lg" className="text-gray-400400 mt-1">Login and started now!</Text>
   </header>

<form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
  
  <label htmlFor="email" className="flex flex-col gap-3">
    <Text  className="font-semibold">E-mail</Text>
    
    <TextInput.Root>
      <TextInput.Icon>
        <Envelope/>
      </TextInput.Icon>
      <TextInput.Input type="email" id="email" placeholder="your E-mail"/>
    </TextInput.Root>
  
  </label>
  <label htmlFor="email" className="flex flex-col gap-3">
    <Text  className="font-semibold">Password</Text>
    
    <TextInput.Root>
      <TextInput.Icon>
        <Lock/>
      </TextInput.Icon>
      <TextInput.Input type="password" id="password" placeholder="*********"/>
    </TextInput.Root>
  
  </label>
  <label htmlFor="remember" className="flex items-center gap-2">
<Checkbox id="remember" />
<Text size="sm" className="text-gray-400200">Remember-me</Text>
  </label>

  <Button type="submit">Log in</Button>
</form>

<footer className="flex felx-col items-center gap-4 mt-8">
  <Text asChild size="sm">
  <a href="" className="text-gray-400 underline">Forgot Password?</a>
  </Text>
  <Text asChild size="sm">
  <a href="" className="text-gray-400 underline">Not registered yet?</a>
  </Text>
</footer>
</div>
  )
}


