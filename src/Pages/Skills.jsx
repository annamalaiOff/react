import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
function Skills() {
  return (
    
    <div className='sk'>
   
          <div className='skills'>
            <div className='skillhead'>
              <div className='htcs'>
                <div className='html'>
                <button>HTML</button>
                <span><FaHtml5 className='htmlicon'/></span>
                <p>HTML (Hypertext Markup Language) is the standard language for creating and structuring web pages. It uses tags to define elements like headings, paragraphs, links, and images.</p>
              </div>
                <div className='html'>
                <button>CSS</button>
                <span><FaCss3 className='htmlicon'/></span>
                <p>CSS (Cascading Style Sheets) is a stylesheet language used to control the presentation of web pages. It styles HTML elements by defining properties like colors, fonts, and layouts.</p>
              </div>
               </div>
            <div className='jsreact'>
              
              <div className='html'>
              <button>JavaScript</button>
              <span><IoLogoJavascript className='htmlicon'/></span>
              <p>JavaScript is a programming language used to create interactive and dynamic content on websites. It enables features like animations, form validations, and real-time updates in web applications.</p>
              </div>
              <div className='html'>
                <button>React</button>
                <span><FaReact className='htmlicon'/></span>
                <p>React is a JavaScript library for building user interfaces, enabling the creation of reusable UI components. It optimizes rendering with a virtual DOM for efficient updates and performance.</p>
              </div>

            </div>
            
            

            </div>
            
            

          </div>

        </div>
    )
}
export default Skills
