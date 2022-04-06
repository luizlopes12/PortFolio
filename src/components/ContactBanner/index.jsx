import React from 'react'
import { ContactBannerStyles } from './styled'
import socials from '../../img/socials.svg'
import email from '../../img/email.svg'
import linkedin from '../../img/linkedinicon.svg'
import twitter from '../../img/twittericon.svg'
import insta from '../../img/instagramicon.svg'


const ContactBanner = () => {
  return (
    <ContactBannerStyles>
        <h1>Entre em contato</h1>
        <section>
            <div>
                <p>
                    <img src={email} alt="Redes sociais" />
                </p>
                <p>Email</p>
                <span>Luizlopes12@outlook.com</span>
            </div>
            <div>
                <p>
                    <img src={socials} alt="Redes sociais" />
                </p>
                <p>Redes sociais</p>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/luiz-lopes-30b512218/" target='noreferrer'>
                        <img src={linkedin} alt="LinkedIn" />
                        </a>
                    </li>
                    <li>
                    <a href="https://www.instagram.com/confuzzo/" target='noreferrer'>
                        <img src={insta} alt="Instagram" />
                        </a>
                    </li>
                    <li>
                    <a href="https://twitter.com/Luizlopes24" target='noreferrer'>
                        <img src={twitter} alt="Twitter" />
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    </ContactBannerStyles>
  )
}

export default ContactBanner