import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
    <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
                <a href="" className="flex items-center">

                    <img src={`https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/63ef8c3eb36596899e6f809f_Screenshot%202023-02-17%20at%208.30.46%20PM.png `} 
                    className="mr-3 h-8" alt="FlowBite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                    <ul className="text-gray-600 dark:text-gray-400">
                        <li className="mb-4">
                            <a href="" className="hover:underline">Flowbite</a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">Tailwind CSS</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                    <ul className="text-gray-600 dark:text-gray-400">
                        <li className="mb-4">
                            <a href="" className="hover:underline ">Github</a>
                        </li>
                        <li>
                            <a href="" className="hover:underline">Discord</a>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
       
    </div>
</footer>
    </div>
  )
}

export default Footer
