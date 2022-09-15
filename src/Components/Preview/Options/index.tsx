import { OptionsParams, Sizes, CSSProps, CSSProp } from "../../../types";
import { barndLogos } from "../../../assest";
import { twMerge } from "tailwind-merge";

export const Options = ({ wrapperSize, title, optionsNum, continueButtonVisability }: OptionsParams) => {

  const defaultWrapperCSSClasses = 'flex flex-col flex-wrap';

  const cssProps:CSSProps = {
    [Sizes.S160X600]: {
      default: `${defaultWrapperCSSClasses} items-center gap-y-[10px] pt-[10px]`,
      title: {
        default: 'text-[17px] font-bold leading-5 mb-[0px] max-h-[100px] overflow-hidden',
      },
      options: {
        default: 'flex flex-col gap-y-[20px]',
        answers3: 'gap-y-[14px]',
        answers4: 'gap-y-[7px]',
        answers5: 'gap-y-[4px]',
      }, 
      option: {
        default: 'w-[120px] h-[120px] bg-[#002041] text-white',
        answers4: 'w-[100px] h-[100px]',
        answers5: 'w-[85px] h-[85px]'
      },
      button: {
        default: 'bg-[#f40953] text-white	font-bold text-[12px] rounded-full w-[94px] self-center leading-4',
        answers5: "mt-[-7px]"
      },
      privacyPolicy: {
        default: 'absolute bottom-[2px] right-[7px] text-[10px] font-medium text-[#54697f] tracking-tighter'
      },
      brandLogo: {
        default: 'absolute bottom-[0px] left-[2px] text-[#54697f] w-[65px] h-[20px]'
      }
    },
    [Sizes.S300X250]: {
      default: `${defaultWrapperCSSClasses} gap-y-[15px] gap-x-[10px] justify-center font-bold pt-[10px]`,
      title: {
        default: 'text-[15px] font-bold leading-5 mb-[20px] max-h-[40px] overflow-hidden',
        answers4: 'mb-[-10px]',
        answers5: 'mb-[-10px]'
      },
      options: {
        default: 'flex flex-row flex-wrap gap-x-[10px] justify-center',
        answers4: 'self-center w-[170px] gap-y-[10px]',
        answers5: 'gap-y-[10px]'
      }, 
      option: {
        default: 'w-[75px] h-[75px] bg-[#002041] text-white'
      },
      button: {
        default: 'bg-[#f40953] text-white	font-bold text-[12px] rounded-full w-[94px] self-center leading-4 mt-[50px]',
        answers4: 'mt-[-5px]',
        answers5: 'mt-[-5px]'
      },
      privacyPolicy: {
        default: 'absolute bottom-[3px] right-[5px] text-[10px] font-medium text-[#54697f] tracking-tighter'
      },
      brandLogo: {
        default: 'absolute bottom-[0px] left-[2px] text-[#54697f] w-[65px] h-[20px]'
      }
    },
    [Sizes.S320X480]: {
      default: `${defaultWrapperCSSClasses} gap-y-[8px] gap-x-[10px] justify-center font-bold pt-[19px]`,
      title: {
        default: 'text-[20px] font-bold leading-6 mb-[16px] max-h-[70px] overflow-hidden',
      },
      options: {
        default: 'flex flex-row self-center flex-wrap gap-y-[25px] gap-x-[20px] justify-center',
        answers2: 'flex-col',
        answers5: 'gap-y-[10px] gap-x-[10px]'
      },
      option: {
        default: 'w-[130px] h-[130px] bg-[#002041] text-white',
        answers5: 'w-[100px] h-[100px]'
      },
      button: {
        default: 'bg-[#f40953] text-white	font-bold text-[12px] rounded-[8px] w-[94px] self-center leading-6 mt-[15px]',
        answers5: 'mt-[2px]'
      },
      privacyPolicy: {
        default: 'absolute bottom-[5px] right-[10px] text-[12px] font-medium text-[#54697f] tracking-tighter'
      },
      brandLogo: {
        default: 'absolute bottom-[-4px] left-[3px] text-[#54697f] w-[90px] h-[32px]'
      }
    },
    [Sizes.S480X320]: {
      default: `${defaultWrapperCSSClasses} gap-y-[8px] gap-x-[10px] justify-center font-bold pt-[5px]`,
      title: {
        default: 'text-[21px] font-bold leading-6 mb-[27px] pt-[5px] max-h-[55px] overflow-hidden',
        answers4: 'mb-[3px]',
        answers5: 'mb-[3px]'
      },
      options: {
        default: 'flex flex-row flex-wrap self-center gap-x-[25px] justify-center',
        answers3: 'gap-x-[10px]',
        answers4: 'w-[245px] gap-x-[45px] gap-y-[10px]',
        answers5: 'w-[350px] gap-y-[10px]'
      }, 
      option: {
        default: 'w-[130px] h-[130px] bg-[#002041] text-white',
        answers4: 'w-[100px] h-[100px]',
        answers5: 'w-[100px] h-[100px]'
      },
      button: {
        default: 'bg-[#f40953] text-white	font-bold text-[12px] rounded-[8px] w-[94px] self-center leading-6 mt-[18px]',
        answers4: 'mt-0',
        answers5: 'mt-0'
      },
      privacyPolicy: {
        default: 'absolute bottom-[5px] right-[10px] text-[12px] font-medium text-[#54697f] tracking-tighter'
      },
      brandLogo: {
        default: 'absolute bottom-[-3px] left-[4px] text-[#54697f] w-[90px] h-[32px]'
      }
    },
  };

  const wrapper:CSSProp = cssProps[wrapperSize];
  const optionKey:string = `answers${optionsNum}`;

  return (
    <div className={twMerge(`${wrapper.default}`)}>
      <div className={twMerge(`${wrapper.title.default} ${wrapper.title[optionKey] ?? ''}`)}>{title}</div>
      <div className={twMerge(`${wrapper.options.default} ${wrapper.options[optionKey] ?? ''}`)}>      
          {Array.from({ length: optionsNum }).map((i, key: number) => (
          <div key={key} 
               className={twMerge(`${wrapper.option.default} ${wrapper.option[optionKey] ?? ''}`)}
          > 
            {`Option ${key + 1}`}
          </div>
        ))}
      </div>
      {continueButtonVisability === 'show'
          ? <button className={twMerge(`${wrapper.button.default} ${wrapper.button[optionKey] ?? ''}`)}>
              continue
            </button> 
          : ''}
      <a href="" className={twMerge(`${wrapper.privacyPolicy.default} ${wrapper.privacyPolicy[optionKey] ?? ''}`)}>
        Privacy Policy
      </a>
      <a href="http://nielsen.com/" target="_blank" className={twMerge(`${wrapper.brandLogo.default} ${wrapper.brandLogo[optionKey] ?? ''}`)}>
        <img src={barndLogos[0]} alt="Nielsen" title="Nielsen" />
      </a>
    </div>
  );
};