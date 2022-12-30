import React from 'react'
import styles from './roadmapComponent.module.css'




const RoadmapCompoonent = () => {
  return (
    <div className={styles.container}>
    <div className={styles.section1}>
    <img 
      className={styles.purple_ellipse}
      src='/about5.png'/>
        <div>
        <h2>Roadmap</h2>
        <p>The success of every NFT project is all about a clear vision. So we will share with you how we plan to change the NFT lottery industry with our unique MYLT project.</p> 
        </div>
        <img 
      className={styles.yellow_ellipse}
      src='/about4.png'/>
    </div>

    <div className={styles.sectionTwo}>
    <div className={styles.section2}>
      <h2>What to expect from Our </h2>
       <h2>Innovative MYLT NFT Lottery?</h2>
      <div className={styles.section2_1}>
        <div className={styles.roadmap1}>
        <div>
          <div className={styles.main_content}>
          <h3>Initial MYLT lotteries</h3>
        <p>Our journey begins with our initial first few lotteries. They will have general rewards like NFTs, Rolex watches, or gadgets and fall into four categories: G0, G1, G2, and G3. Your chance of winning something in these lotteries varies between 25% and 100%!
And the best thing is that each lottery has exclusive token rewards you can use to buy tickets for the new lotteries. In other words, it will be like a never-ending exciting game, each with a shot at the top prizes!</p>
          </div>
        </div>
        </div>
        
      </div>
    </div>
   
    <div className={styles.section3}>
    <div className={styles.divider}>
        <div className={styles.circle}></div>
        <div className={styles.line}></div>
        <div className={styles.circle_broken}>
        <div className={styles.broken_line}> &lt;-----</div>
        <div className={styles.circle}></div>
        </div>
        
        <div className={styles.line2}></div>
        <div className={styles.circle_broken_left}>
        <div className={styles.circle}></div>
        <div className={styles.broken_line_}> ---&gt;</div>
        </div>
        <div className={styles.line3}></div>
        <div className={styles.circle_broken}>
        <div className={styles.broken_line}> &lt;-----</div>
        <div className={styles.circle}></div>
        </div>
    </div>
      <div className={styles.section3_inner}>
        <div className={styles.section3_1}>
          <div className={styles.main_content2}>
            <h3>Creating an NFT Lottery Tickets Marketplace</h3>
            <p>Yuga Labs, the team behind the BAYC NFT collection, went further by creating MAYC. With an already established team and clear goals, this project is destined for success. There are 20,000 MAYC NFTs, which are traded for around 10.8 ETH ($12,800). Not bad, considering that we are in the worst bear market in the last five years.</p>
          </div>
        </div>
      <div className={styles.section_3_img}>
        <img src='/roadmapone.png'/>
      </div>
    </div>


    <div className={styles.section3_2}>
    <div className={styles.section3_2_img}>
        <img src='roadmaptwo.png'/>
      </div>
      <div className={styles.section3_2_inner}>
      <div className={styles.main_content3}>
        <h3>Introducing Niche Lotteries</h3>
        <p>Not two players think alike. Therefore, having the same general awards for our MYLT lotteries won't be optimal.
So, in our marketplace, we will introduce various niche lotteries that cover shiny toys you can win, like watches, fine art, supercars, and whatever you can think of!</p>
      </div>
      </div>
      
    </div>


    <div className={styles.section3_3}>
      <div className={styles.section3_3_inner}>
        <div className={styles.main_content4}>
          <h3>Building Our Own Metaverse </h3>
          <p>Nothing beats the nerve-wracking emotions while playing a game of chance live. And the blockchain Metaverse is the only place you can get as close to that feeling as possible. After the initial success of our innovative lotteries, we plan to integrate them into our own Metaverse all our NFT holders can join. It will be plenty of fun!</p>
        </div>
      </div>
      <div className={styles.section3_3_img}>
        <img src='/roadmapthree.png'/>
      </div>
    </div>
    
    </div>
    </div>
    
    </div>
  )
}

export default RoadmapCompoonent;