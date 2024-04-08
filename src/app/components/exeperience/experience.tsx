import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"
import "./experience.scss"


export function Experience(){
    return(
        <div className="experience">
        <SectionTitle text="Experience"/>
        <p>3 years working as a Software Developer, in companys such as Itaú, Stone and Aftersale.</p>
        <div className="time-experience">

      <div className="experience-language">
      <Image
          src="/clogo.png"
          alt="c# Logo"
          width={40}
          height={40}
          priority
        />
        <div className="experience-unit">
          <div className="experience-measure measure-3">
              <span>2 years</span>
          </div>
        </div>
      </div>
      <div className="experience-language">
      <Image
          src="/python.png"
          alt="c# Logo"
          width={40}
          height={40}
          priority
        />
        <div className="experience-unit">
          <div className="experience-measure measure-2">
          <span>1 years</span>
          </div>
        </div>
      </div>
      <div className="experience-language">
      <Image
          src="/angularlogo.png"
          alt="c# Logo"
          width={40}
          height={40}
          priority
        />
        <div className="experience-unit">
          <div className="experience-measure measure-1">
          <span>6 months</span>
          </div>
        </div>
      </div>
      <div className="experience-language">
      <Image
          src="/rs.png"
          alt="c# Logo"
          width={40}
          height={40}
          priority
        />
        <div className="experience-unit">
          <div className="experience-measure measure-1">
          <span>6 months  </span>
          </div>
        </div>
      </div>
      <div>
      </div>
      </div>
      </div>
    )
}

