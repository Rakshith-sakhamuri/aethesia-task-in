import {
  Input,
  Ripple,
  initTE,
} from "tw-elements";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";

initTE({ Input, Ripple });

function Login() {
  return (
    <>
    <section class="h-screen">
        <div class="h-full">
            <div
            class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div
                class="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                <div style = {
                    {borderRadius: "25px 25px 25px 25px",
                        marginLeft:"10px",
                        height: "800px",
                        background: "black",
                        padding: "200px",
                    }
                }>
            
                <p style={{font:"white"}}></p>
                <p  
                class="  mx-4 mb-0  " 
                style={{color:"white",
                fontSize:50,
                marginLeft:"-150px",
                marginTop:"100px",
                width:"500px",
                }}>
                    <b>100% UpTime 	&#128526;</b>
                <br />
                <span
                style={{color:"#656565",
                fontSize:30
                }}>
                Zero Infrastructure<br /> Management
              </span>
            </p>
            <div class="flow-root ...">
                <div class="my-20 ...">.</div>
            </div>

            <p
              style={{color:"white",
              fontSize:20,
              marginBottom:"000px",
              marginLeft:"-150px",
              cursor: "pointer"
              }}>
                <a href="https://aesthisia.com/">
                <svg style={{color:"white"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                </a >
                <p 
                class="  hover:cursor-pointer">
                    aesthesia.com</p>
                </p>
                <span style={{color:"black",marginLeft:"500px", display: "inline-block"}} 
                class="social-container">
                    <a href="https://www.linkedin.com/company/aesthisia/?originalSubdomain=in"
                    style={{color:"white"}}
                        className="instagram social">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    
                 </span>


          </div>
        </div>
                <div class="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                

                <img style={{marginLeft:"125px"}} src="https://t3.ftcdn.net/jpg/02/38/20/04/360_F_238200477_WATEYtkMrSTYJ9bSNtxjij7UF2bTRMjo.jpg" alt="hello!"/>
                <p  class=" ... mx-4 mb-0 text-center font-semibold dark:text-white" style={{fontSize:50}}>
                        Welcome <span style={{fontSize:50,color:"#66ff66"}}>Back!</span>
                        </p>
                    <form>

                    <div
                        class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                        <p
                        class="mx-4 mb-0 text-center font-semibold dark:text-slate-400">
                        <span class="mx-4 mb-0 text-center font-semibold dark:text-slate-100">Glad to see you, Again!</span>
                        </p>
                    </div>

                        <form>
                            <div class="mb-6">
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" required />
                            </div>
                        <div class="mb-6">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                            <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Password" required />
                        </div>
                        <div class="flex items-start mb-6">
                        </div>
                        </form>
                        <div class="mb-1 flex items-center justify-between">
                            <div class="mb-[0.125rem] block min-h-[0.5rem] pl-[1.5rem]">
                            <label
                                class="inline-block pl-[0.15rem] hover:cursor-pointer"
                                for="exampleCheck2">
                                
                            </label>
                            </div>

                            <a href="/">Forgot password?</a>
                        </div>

                        <div class="text-center lg:text-center">
                        <button href="/" style={{backgroundColor : "black" ,boxShadow:" 0 8px 16px 0 rgba(0,0,0,1), 0 6px 20px 0 rgba(0,0,0,0.19)"}}class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-40 rounded content-center">
                            Log In
                            </button>

                            <p class="mb-0 mt-2 pt-1 text-sm font-semibold">
                            Don't have an account?
                            {'           '}
                            <a href="/"  class="text-xl ..."
                            style={{cursor: "pointer",color: "#66ff66"}}>   Sign up</a>
                            </p>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </section>
    </>
  );
}

export default Login;

