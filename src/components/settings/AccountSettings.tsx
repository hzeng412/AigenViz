import * as React from 'react';
import { SettingSection } from './SettingSection';
import { ContactMethod } from './ContactMethod';

const accountItems = [
  {
    title: "hello@insightfulgrower.io",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fe8f17df1b537773557712ee53affd1d655a0420c5d877133d94534209a7b25e?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0"
  },
  {
    title: "Password: **********",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4fd03d7c1325af8e6a34620992a89924c20b6b7f963824a052412f56f4668ef0?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0"
  }
];

const subscriptionItems = [
  {
    title: "Aigen Crop Management (Annual)",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d1df6f24a7406d54d514cd2ba81985b570059827f57868380e5d17cab37bb2d4?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0"
  },
  {
    title: "Upgrade/Downgrade Subscription",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d1df6f24a7406d54d514cd2ba81985b570059827f57868380e5d17cab37bb2d4?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0"
  },
  {
    title: "Payment Method: Manage or update saved payment details",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d1df6f24a7406d54d514cd2ba81985b570059827f57868380e5d17cab37bb2d4?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0"
  },
  {
    title: "Billing History: List of past invoices and payment history",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d1df6f24a7406d54d514cd2ba81985b570059827f57868380e5d17cab37bb2d4?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0"
  }
];

const preferencesItems = [
  {
    title: "Language Settings",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a913765349a37d46bfa33a3672a18c1116102a280964d8c10c043e53720771ef?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0"
  },
  {
    title: "Time Zone Selection",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/355f8c5785f32785c5a435e558c60f16027e47f06bb7ecfb1f485af6b91b6784?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0"
  },
  {
    title: "Notification Preferences",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/355f8c5785f32785c5a435e558c60f16027e47f06bb7ecfb1f485af6b91b6784?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0"
  }
];

export function AccountSettings() {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <div className="flex flex-col px-9 pt-32 pb-3 w-full bg-stone-50 max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <div className="flex flex-col items-center pt-6 pr-6 pl-20 w-full bg-gray-50 rounded-lg border-2 border-gray-300 border-solid max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col justify-center p-4 max-w-full text-xl font-bold tracking-wide bg-white rounded-xl shadow-[0px_1px_2px_rgba(0,0,0,0.05)] text-neutral-500 w-[1168px]">
            <div className="py-3 bg-black bg-opacity-0 max-md:pr-5 max-md:max-w-full">
              Account Settings
            </div>
          </div>
          
          <div className="mt-8 w-full max-w-[1168px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-sm tracking-normal text-neutral-600 max-md:mt-10 max-md:max-w-full">
                  <SettingSection title="Account Information" items={accountItems} />
                  <SettingSection title="Subscription Details" items={subscriptionItems} />
                  <SettingSection title="Preferences" items={preferencesItems} />
                </div>
              </div>
              
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
                  <div className="flex flex-col px-4 pt-4 pb-10 mt-7 bg-white rounded-xl shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:max-w-full">
                    <div className="py-1.5 max-w-full text-2xl font-bold leading-none bg-black bg-opacity-0 text-neutral-500 w-[416px] max-md:pr-5">
                      Contact Us
                    </div>
                    <div className="flex flex-col items-start pr-2 mt-4 w-full text-sm text-black bg-black bg-opacity-0 max-md:max-w-full">
                      <div className="z-10 -mt-2.5 text-2xl leading-none text-gray-400">
                        We are here to help
                      </div>
                      
                      <div className="py-1 mt-6 max-w-full font-semibold bg-black bg-opacity-0 w-[390px] max-md:pr-5">
                        Directly contact Aigen's support team
                      </div>
                      
                      <div className="flex flex-col items-start self-stretch px-3.5 pt-3.5 pb-1 w-full leading-none rounded-lg bg-stone-50 max-md:pr-5 max-md:max-w-full">
                        <ContactMethod
                          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/17181ce5a7d3f6d291998b023931cf52372840d08fbef9908d8a47765e5c88aa?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0"
                          text="(855) 737-7645"
                        />
                      </div>
                      
                      <div className="pt-px pb-2 mt-7 max-w-full font-semibold bg-black bg-opacity-0 w-[390px] max-md:pr-5">
                        Chat Live
                      </div>
                      
                      <div className="flex flex-col items-start self-stretch px-3.5 pt-3.5 pb-1 w-full leading-none rounded-lg bg-stone-50 max-md:pr-5 max-md:max-w-full">
                        <ContactMethod
                          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/7001b68d0454337ceee76f350aa7d52bdc14f442915e51e9de01d9608e93df30?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0"
                          text="We are avaliable Monday to Friday, 09:00–17:00"
                        />
                      </div>
                      
                      <div className="pt-px pb-2 mt-7 max-w-full font-semibold bg-black bg-opacity-0 w-[390px] max-md:pr-5">
                        Ask a Question
                      </div>
                      
                      <div className="flex flex-col items-start self-stretch px-3.5 pt-3.5 pb-1 w-full leading-none rounded-lg bg-stone-50 max-md:pr-5 max-md:max-w-full">
                        <ContactMethod
                          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/d32e26d905e805515b5e90e79aad3ccfe6c797a144e5ad21cf4f49cf2dc4b72c?placeholderIfAbsent=true&apiKey=1733fe44aec44f7491ef147a718cebc0"
                          text="Fill out our form and we'll get back to you in 24 hours."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
