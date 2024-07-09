import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import styles from './Contact.module.css';

const Contact = () => {

    const GITHUB_LINK = 'https://github.com/aaronchisholm'
    const LINKEDIN_LINK = 'https://www.linkedin.com/in/aaron-chisholm-northeastern/'
    const INSTAGRAM_LINK = ''

    return (
        <div className={styles.Contact}>
        <div className='row'>
            <div className='col-4'>
                <a href={GITHUB_LINK}>
                    <FontAwesomeIcon icon={faGithub} size='3x'/>
                </a>
            </div>
            <div className='col-4'>
                <a href={LINKEDIN_LINK}>
                    <FontAwesomeIcon icon={faLinkedin} size='3x'/>
                </a>  
            </div>
            <div className='col-4'>
                <a href={INSTAGRAM_LINK}>
                    <FontAwesomeIcon icon={faInstagram} size='3x'/>
                </a>      
            </div>
        </div>
        </div>
    )


};

export default Contact;