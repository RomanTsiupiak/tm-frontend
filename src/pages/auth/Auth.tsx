import { Tabs } from '@/components';

import { SignIn } from './SignInForm';
import { SignUp } from './SignUpForm';

export const Auth = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="p-4 shadow-lg rounded-xl">
        <Tabs tabs={['signIn', 'signUp']}>
          <div className="flex gap-3 justify-center">
            <Tabs.Button name="signIn">Sign in</Tabs.Button>
            <Tabs.Button name="signUp">Sign up</Tabs.Button>
          </div>

          <Tabs.Container name="signIn">
            <SignIn />
          </Tabs.Container>

          <Tabs.Container name="signUp">
            <SignUp />
          </Tabs.Container>
        </Tabs>
      </div>
    </div>
  );
};
