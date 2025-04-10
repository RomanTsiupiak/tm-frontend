import { Tabs } from '@/components';

import { SignIn } from './signIn/SignInForm';
import { SignUp } from './SignUpForm';

export const Auth = () => {
  return (
    <div className="w-full h-screen md:flex items-center justify-center">
      <div className="p-4 flex flex-col h-full w-full md:h-max md:w-[400px] md:shadow-xl rounded-md">
        <Tabs tabs={['signIn', 'signUp']}>
          <div className="flex gap-4 justify-center border-b-1 border-primary-300 pb-4 md:border-0">
            <Tabs.Button name="signIn">Sign in</Tabs.Button>
            <Tabs.Button name="signUp">Sign up</Tabs.Button>
          </div>

          <Tabs.Container
            name="signIn"
            className="flex flex-1 items-center justify-center overflow-auto md:block"
          >
            <SignIn />
          </Tabs.Container>

          <Tabs.Container
            name="signUp"
            className="flex flex-1 items-center justify-center overflow-auto"
          >
            <SignUp />
          </Tabs.Container>
        </Tabs>
      </div>
    </div>
  );
};
