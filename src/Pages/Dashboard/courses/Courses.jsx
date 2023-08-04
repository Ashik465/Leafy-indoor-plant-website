
import card1 from '../../../assets/picture/Image1.png'
import card2 from '../../../assets/picture/Image2.png'
import card3 from '../../../assets/picture/Image3.png'
import card4 from '../../../assets/picture/Image4.png'
import card5 from '../../../assets/picture/Image5.png'
import card6 from '../../../assets/picture/Image6.png'
import card7 from '../../../assets/picture/Image7.png'
import card8 from '../../../assets/picture/Image8.png'
import combo from '../../../assets/picture/Combined Shape.png'
const Courses = () => {
    return (
        <>
           {/* card section  */}

           <div className="grid grid-cols-1 md:grid-cols-4 gap-5 p-10">

           <div className="w-full h-full px-2 pt-2 pb-4 bg-white rounded-2xl flex-col justify-center items-center gap-4 inline-flex">
  <img className="w-full h-52 rounded-lg" src={card1} />
  <div className="px-2.5 py-0.5 bg-white rounded-md backdrop-blur-3xl justify-start items-start gap-2.5 inline-flex">
    <div className="text-sky-950 text-xs font-medium leading-normal">4D Animation</div>
  </div>
  <div className="self-stretch h-28 flex-col justify-start items-start gap-12 flex">
    <div className="text-sky-950 text-base font-medium leading-snug">Learning Maxon 4D Training Course</div>
    <div className="self-stretch justify-between items-center gap-20 inline-flex">
      <div className="justify-start items-center gap-2 flex">
        <img className="w-5 h-4" src={combo} />
        <div className="text-zinc-500 text-sm font-normal leading-tight">15 Lessons (10h 5m)</div>
      </div>
      <div className="px-4 py-2 bg-indigo-500 rounded-lg justify-center items-center gap-2.5 flex">
        <div className="text-right text-white text-sm font-medium">$140</div>
      </div>
    </div>
  </div>
</div>
{/* 2nd */}
<div className="w-full h-full px-2 pt-2 pb-4 bg-white rounded-2xl flex-col justify-center items-center gap-4 inline-flex">
  <img className="w-full h-52 rounded-lg" src={card2} />
  <div className="px-2.5 py-0.5 bg-white rounded-md backdrop-blur-3xl justify-start items-start gap-2.5 inline-flex">
    <div className="text-sky-950 text-xs font-medium leading-normal">Design</div>
  </div>
  <div className="self-stretch h-28 flex-col justify-start items-start gap-12 flex">
    <div className="text-sky-950 text-base font-medium leading-snug">Design Thinking: The Beginner’s Guide</div>
    <div className="self-stretch justify-between items-center gap-20 inline-flex">
      <div className="justify-start items-center gap-2 flex">
        <img className="w-5 h-4" src={combo} />
        <div className="text-zinc-500 text-sm font-normal leading-tight">15 Lessons (10h 5m)</div>
      </div>
      <div className="px-4 py-2 bg-indigo-500 rounded-lg justify-center items-center gap-2.5 flex">
        <div className="text-right text-white text-sm font-medium">$140</div>
      </div>
    </div>
  </div>
</div>
{/* 3rd */}
<div className="w-full h-full px-2 pt-2 pb-4 bg-white rounded-2xl flex-col justify-center items-center gap-4 inline-flex">
  <img className="w-full h-52 rounded-lg" src={card3} />
  <div className="px-2.5 py-0.5 bg-white rounded-md backdrop-blur-3xl justify-start items-start gap-2.5 inline-flex">
    <div className="text-sky-950 text-xs font-medium leading-normal">Scratch</div>
  </div>
  <div className="self-stretch h-28 flex-col justify-start items-start gap-12 flex">
    <div className="text-sky-950 text-base font-medium leading-snug">Become a Ux Designer from Scratch</div>
    <div className="self-stretch justify-between items-center gap-20 inline-flex">
      <div className="justify-start items-center gap-2 flex">
        <img className="w-5 h-4" src={combo} />
        <div className="text-zinc-500 text-sm font-normal leading-tight">15 Lessons (10h 5m)</div>
      </div>
      <div className="px-4 py-2 bg-indigo-500 rounded-lg justify-center items-center gap-2.5 flex">
        <div className="text-right text-white text-sm font-medium">$140</div>
      </div>
    </div>
  </div>
</div>
{/* card4 */}

<div className="w-full h-full px-2 pt-2 pb-4 bg-white rounded-2xl flex-col justify-center items-center gap-4 inline-flex">
  <img className="w-full h-52 rounded-lg" src={card4} />
  <div className="px-2.5 py-0.5 bg-white rounded-md backdrop-blur-3xl justify-start items-start gap-2.5 inline-flex">
    <div className="text-sky-950 text-xs font-medium leading-normal">Design</div>
  </div>
  <div className="self-stretch h-24 flex-col justify-between items-start gap-12 flex">
    <div className="self-stretch text-sky-950 text-base font-medium leading-snug">AWS Certified Solutions Architect - Associate 2021</div>
    <div className="self-stretch justify-between items-center gap-20 inline-flex">
      <div className="justify-start items-center gap-2 flex">
        <img className="w-5 h-4" src={combo} />
        <div className="text-zinc-500 text-sm font-normal leading-tight">15 Lessons (10h 5m)</div>
      </div>
      <div className="px-4 py-2 bg-indigo-500 rounded-lg justify-center items-center gap-2.5 flex">
        <div className="text-right text-white text-sm font-medium">$140</div>
      </div>
    </div>
  </div>
</div>

{/* card 5 */}
<div className="w-full h-full px-2 pt-2 pb-4 bg-white rounded-2xl flex-col justify-center items-center gap-4 inline-flex">
  <img className="w-full h-52 rounded-lg" src={card5} />
  <div className="px-2.5 py-0.5 bg-white rounded-md backdrop-blur-3xl justify-start items-start gap-2.5 inline-flex">
    <div className="text-sky-950 text-xs font-medium leading-normal">4D Animation</div>
  </div>
  <div className="self-stretch h-28 flex-col justify-start items-start gap-12 flex">
    <div className="text-sky-950 text-base font-medium leading-snug">Learning Maxon 4D Training Course</div>
    <div className="self-stretch justify-between items-center gap-20 inline-flex">
      <div className="justify-start items-center gap-2 flex">
        <img className="w-5 h-4" src={combo} />
        <div className="text-zinc-500 text-sm font-normal leading-tight">15 Lessons (10h 5m)</div>
      </div>
      <div className="px-4 py-2 bg-indigo-500 rounded-lg justify-center items-center gap-2.5 flex">
        <div className="text-right text-white text-sm font-medium">$350</div>
      </div>
    </div>
  </div>
</div>

{/* card6 */}

<div className="w-full h-full px-2 pt-2 pb-4 bg-white rounded-2xl flex-col justify-center items-center gap-4 inline-flex">
  <img className="w-full h-52 rounded-lg" src={card6} />
  <div className="px-2.5 py-0.5 bg-white rounded-md backdrop-blur-3xl justify-start items-start gap-2.5 inline-flex">
    <div className="text-sky-950 text-xs font-medium leading-normal">Development</div>
  </div>
  <div className="self-stretch h-28 flex-col justify-between items-start gap-12 flex">
    <div className="self-stretch h-5 text-sky-950 text-base font-medium leading-snug">The Complete 2021 Web Development Bootcamp</div>
    <div className="self-stretch justify-between items-center gap-20 inline-flex">
      <div className="justify-start items-center gap-2 flex">
        <img className="w-5 h-4" src={combo} />
        <div className="text-zinc-500 text-sm font-normal leading-tight">15 Lessons (10h 5m)</div>
      </div>
      <div className="px-4 py-2 bg-indigo-500 rounded-lg justify-center items-center gap-2.5 flex">
        <div className="text-right text-white text-sm font-medium">$199</div>
      </div>
    </div>
  </div>
</div>

{/* card 7 */}


<div className="w-full h-full px-2 pt-2 pb-4 bg-white rounded-2xl flex-col justify-center items-center gap-4 inline-flex">
  <img className="w-full h-52 rounded-lg" src={card7} />
  <div className="px-2.5 py-0.5 bg-white rounded-md backdrop-blur-3xl justify-start items-start gap-2.5 inline-flex">
    <div className="text-sky-950 text-xs font-medium leading-normal">Python</div>
  </div>
  <div className="self-stretch h-28 flex-col justify-start items-start gap-12 flex">
    <div className="self-stretch h-5 text-sky-950 text-base font-medium leading-snug">Python for Data Science and Machine Learning</div>
    <div className="self-stretch justify-between items-center gap-20 inline-flex">
      <div className="justify-start items-center gap-2 flex">
        <img className="w-5 h-4" src={combo} />
        <div className="text-zinc-500 text-sm font-normal leading-tight">15 Lessons (10h 5m)</div>
      </div>
      <div className="px-4 py-2 bg-indigo-500 rounded-lg justify-center items-center gap-2.5 flex">
        <div className="text-right text-white text-sm font-medium">$500</div>
      </div>
    </div>
  </div>
</div>

{/* card 8 */}

<div className="w-full h-full px-2 pt-2 pb-4 bg-white rounded-2xl flex-col justify-center items-center gap-4 inline-flex">
  <img className="w-full h-52 rounded-lg" src={card8} />
  <div className="px-2.5 py-0.5 bg-white rounded-md backdrop-blur-3xl justify-start items-start gap-2.5 inline-flex">
    <div className="text-sky-950 text-xs font-medium leading-normal">Artificial</div>
  </div>
  <div className="self-stretch h-24 flex-col justify-between items-start gap-12 flex">
    <div className="self-stretch text-sky-950 text-base font-medium leading-snug">Artificial Intelligence & Machine Learning</div>
    <div className="self-stretch justify-between items-center gap-20 inline-flex">
      <div className="justify-start items-center gap-2 flex">
        <img className="w-5 h-4" src={combo} />
        <div className="text-zinc-500 text-sm font-normal leading-tight">15 Lessons (10h 5m)</div>
      </div>
      <div className="px-4 py-2 bg-indigo-500 rounded-lg justify-center items-center gap-2.5 flex">
        <div className="text-right text-white text-sm font-medium">$300</div>
      </div>
    </div>
  </div>
</div>

           </div>
        </>
    );
};

export default Courses;