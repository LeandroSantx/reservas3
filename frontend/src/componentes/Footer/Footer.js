import React from 'react';
import {
  Anchor,
  Image,
  Navbar
} from 'react-bootstrap';
import './style.css'

function FooterIcons() {
  return ( 
    <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                 
                    <div className='barra'>
                       
                        <ul className='icones2'>
                            <li><Anchor href='https://www.instagram.com/'><Image className='Icones' src='https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png'/></Anchor>
                            <Anchor href='https://pt-br.facebook.com/'> <Image className='Icones' src='https://www.sendible.com/hs-fs/hubfs/blog-import/2020/20-08-Aug/sm-icons-facebook-logo.png?width=120&name=sm-icons-facebook-logo.png'/></Anchor>
                            <Anchor href='https://twitter.com/i/flow/login'> <Image className='Icones' src='https://www.sendible.com/hs-fs/hubfs/Imported_Blog_Media/twitter-1.png?width=120&height=120&name=twitter-1.png'/></Anchor>
                            </li>
                        </ul>
                    </div>
                </div>
               
            </div>
        </footer>
    </div>
  );


}

export default FooterIcons;