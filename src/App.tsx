import CounterAnimation from './components/CounterAnimaton';
import Header from './components/Header'
import Hero from './components/Hero';
import {motion} from "motion/react";
import { useEffect, useRef, useState } from 'react';
import { IoPeople, IoPerson } from 'react-icons/io5';
import { AiOutlineFileDone } from 'react-icons/ai';
import { MdSupportAgent } from 'react-icons/md';
import ScrollAboutUs from './components/ScrollAboutUs';
import Welcome from './components/Welcome';
import HorizontalScroller2 from './components/HorizontalScroller2';
import Divider from './components/Divider';
import OurStory from './components/OurStory';
import OurGoal from './components/OurGoal';
import OurClients from './components/OurClients';
import Footer from './components/Footer';


function App() {
  const welcomeTextRef = useRef<HTMLDivElement|null>(null);
  const [isWelcomeTextVisible, setIsWelcomeTextVisible] = useState(false);





  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsWelcomeTextVisible(entry.isIntersecting);
    }, {threshold:0.10});

    if (welcomeTextRef.current) {
      observer.observe(welcomeTextRef.current);
    }

    return() => {
      if (welcomeTextRef.current) {
        observer.unobserve(welcomeTextRef.current)
      }
    }
  }, []);

  return (
    <div className="border-1 border-red-500">
      <Header />
      <Hero />

      
      {/*<ScrollAboutUs />*/}

Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloremque dolorem repellat eos necessitatibus at sed voluptas quibusdam fuga quos nesciunt illum ipsa aliquam voluptates cum earum eaque exercitationem sit, ex nobis perspiciatis iure. Molestiae, aliquid magni aperiam voluptates voluptate vero quos numquam hic assumenda necessitatibus dolore quo sed ipsum voluptas unde voluptatum dolor eveniet nobis mollitia nulla quibusdam praesentium, deleniti autem harum! Necessitatibus velit error doloribus ipsa dolores sed dicta esse culpa harum dolor corporis quisquam deleniti ea itaque dolorem, numquam asperiores, earum aliquam fuga eligendi, fugiat repellendus. Officia similique odit repudiandae eligendi fugiat, fugit amet voluptatibus eveniet consequuntur exercitationem illum incidunt ratione distinctio delectus nostrum. Enim, aperiam? Placeat repellendus architecto reprehenderit quos labore repellat, libero aliquid voluptatum quia doloribus nihil dolore natus numquam porro voluptatem facilis sapiente! Possimus fuga nobis ab fugit atque nihil vel maxime assumenda, dicta laudantium quo? Aperiam cupiditate quis doloremque fugit, non explicabo culpa modi quas esse quisquam vitae suscipit nisi error reprehenderit? Assumenda laboriosam id ipsa, aperiam, voluptas iste ut earum porro fugit facilis quas nostrum tenetur, neque recusandae? Neque vitae dolor ab. Libero rem quasi pariatur blanditiis, quam exercitationem! Molestiae suscipit quidem esse atque quisquam. Atque, totam dolorum quos quas veniam recusandae necessitatibus, repudiandae sed suscipit perspiciatis delectus quo deserunt odio quasi. Iure temporibus officiis, exercitationem quae illum nulla perspiciatis doloremque accusamus eligendi eaque totam pariatur maxime veritatis eum quaerat tempora in autem sapiente necessitatibus impedit est ratione. Tenetur suscipit aliquid consequatur magni incidunt laboriosam eligendi ducimus nisi omnis vitae nam in optio reprehenderit, iusto et aspernatur beatae ipsa qui voluptate. Nobis corporis distinctio consectetur ratione dignissimos a, quo enim eveniet suscipit soluta recusandae quidem officiis cupiditate blanditiis doloremque commodi, vel, dicta assumenda praesentium ab quod magnam modi rerum officia! Exercitationem, doloremque. Veritatis voluptatum aut possimus perspiciatis, in facere quaerat omnis blanditiis.
      <Welcome />

      {/*<HorizontalScroller2 />*/}

      {/*<Divider />*/}
      {/*<OurStory />*/}
      
      {/*<Divider />*/}
      {/*<OurGoal />*/}
      
      {/*<Divider />*/}
      {/*<OurClients />*/}

      
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla id explicabo mollitia illum dolorum commodi hic, dolore nesciunt quibusdam quasi magni sit harum aperiam enim odit praesentium impedit ratione autem vel est ipsa eligendi! Accusamus velit voluptas officia corrupti tempore perferendis doloremque commodi ex voluptatum natus porro in quam distinctio quae laudantium exercitationem necessitatibus, debitis cupiditate. Magnam pariatur ipsam iste modi soluta tempora, odio laboriosam quasi optio debitis voluptas quibusdam consequatur ratione dolorem fuga consequuntur asperiores! Sed maxime voluptate officiis soluta laborum, non aspernatur molestiae deserunt ut et consequatur possimus commodi quia repudiandae quos incidunt adipisci eligendi ullam ad iure?
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla id explicabo mollitia illum dolorum commodi hic, dolore nesciunt quibusdam quasi magni sit harum aperiam enim odit praesentium impedit ratione autem vel est ipsa eligendi! Accusamus velit voluptas officia corrupti tempore perferendis doloremque commodi ex voluptatum natus porro in quam distinctio quae laudantium exercitationem necessitatibus, debitis cupiditate. Magnam pariatur ipsam iste modi soluta tempora, odio laboriosam quasi optio debitis voluptas quibusdam consequatur ratione dolorem fuga consequuntur asperiores! Sed maxime voluptate officiis soluta laborum, non aspernatur molestiae deserunt ut et consequatur possimus commodi quia repudiandae quos incidunt adipisci eligendi ullam ad iure?
      <div className="flex justify-around py-6 bg-yellow-300">
        <CounterAnimation Icon={IoPerson} title="OurStaffs" finalValue={56} />
        <CounterAnimation Icon={IoPeople} title="Our Clints" finalValue={5200} />
        <CounterAnimation Icon={AiOutlineFileDone} title="Completed Projects" finalValue={3811} />
        <div
            className="font-bold flex flex-col gap-2 items-center w-max"
        >
            <div className="text-7xl text-gray-500"><MdSupportAgent/></div>
            <div className="text-6xl font-extrabold">24*7</div>
            <div className="text-xl text-gray-500">Support</div>
        </div>
      </div>
      {/*<motion.div
        ref={welcomeTextRef}
        className="text-5xl font-medium"
      >
        {
          "Welcome to the World of Namrata Universal".split(" ").map((str, index) => (
            <motion.span
              key={index}
              initial={{
                opacity:0,
                y:20
              }}
              animate={
                isWelcomeTextVisible ?
                {
                  opacity:1,
                  y:0,
                  transition:{
                    delay:index*0.1,
                    duration:0.3,
                    ease:"easeInOut"
                  }
                }
                :
                {
                    y:20,
                    opacity:0
                }
              }
              custom={index}
              className="welcome opacity-0 inline-block"
            >{str}&nbsp;</motion.span>
          ))
        }
      </motion.div>*/}

      <Footer />  
    </div>
  )
}

export default App;
