import * as React from 'react';
import styles from './LinkBtn.module.scss';
import { ILinkBtnProps } from './ILinkBtnProps';
import { escape } from '@microsoft/sp-lodash-subset';
import MenuBook from '@material-ui/icons/FileCopy';


const Document = () => {
    return(
    <div  className={styles.alertNews}>
    <h1 className={styles.dochead}>Documents</h1>
    <a>
        <div className={styles.docCard}>
        <div className={styles.docCardLeft}>
            <h1><MenuBook /></h1>
            </div>
            <div className={styles.docCardRight}>
            <h3>PRODUCT COMPENDIUM</h3>
            <p>Search for any document</p>
            </div>
        </div>
    </a>
    
    
    
    <a>
        <div className={styles.docCard}>
        <div className={styles.docCardLeft}>
            <h1><MenuBook /></h1>
            </div>
            <div className={styles.docCardRight}>
            <h3>PRODUCT/PROPOSAL FORMS</h3>
            <p>Search for any document</p>
            </div>
        </div>
    </a>
    
    
    
    <a>
        <div className={styles.docCard}>
        <div className={styles.docCardLeft}>
            <h1><MenuBook /></h1>
            </div>
            <div className={styles.docCardRight}>
            <h3>POLICY DOCUMENTS</h3>
            <p>Search for any document</p>
            </div>
        </div>
    </a>

    <a>
        <div className={styles.docCard}>
        <div className={styles.docCardLeft}>
            <h1><MenuBook /></h1>
            </div>
            <div className={styles.docCardRight}>
            <h3>POLICY DOCUMENTS</h3>
            <p>Search for any document</p>
            </div>
        </div>
    </a>
    </div>
    );
    }
    export default Document;