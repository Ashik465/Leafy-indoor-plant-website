
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

{/* top section */}
   <div className='bg-white shadow-lg flex flex-col gap-2 justify-start w-full px-10 py-5'>
   <h1 className="text-sky-950 text-xl font-semibold leading-snug">Discover</h1>
   <div><span className="text-zinc-800 text-base font-normal leading-snug">Dashboard  </span><span className="text-indigo-500 text-base font-medium leading-snug">Courses</span></div>
   </div>

   {/* middle section  */}


   
   

           {/* card section  */}

           <div className="grid grid-cols-1 md:grid-cols-4 gap-5 p-10">

           <div className="card w-full h-full bg-base-100 shadow-xl">
  <figure className='px-2 pt-2 relative'><img src={card1} alt="Shoes" />
  <div className="w-24 h-7 px-2.5 py-0.5 bg-white rounded-md backdrop-blur-3xl justify-start items-start gap-2.5 inline-flex absolute top-2 right-2">
  <div className="text-sky-950 text-xs font-medium leading-normal">4D Animation</div>
</div>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    Learning Maxon 4D Training Course
    </h2>
    <div className='flex justify-between mt-3' >
        <div className='flex justify-center items-center gap-2'>
            <img src={combo} alt="" />
        <h1 className="text-zinc-500 text-sm font-normal leading-tight">15 Lessons (10h 5m)</h1>
        </div>

        <div className="w-16 h-9 px-4 py-2 bg-indigo-500 rounded-lg justify-center items-center gap-2.5 inline-flex">
  <div className="text-right text-white text-sm font-medium">$140</div>
</div>

    </div>
  </div>
</div>
{/* 2nd */}
<div className="card w-full h-full bg-base-100 shadow-xl">
  <figure className='px-2 pt-2 relative'><img src={card2} alt="Shoes" />
  <div className="w-24 h-7 px-2.5 py-0.5 bg-white rounded-md backdrop-blur-3xl justify-start items-start gap-2.5 inline-flex absolute top-2 right-2">
  <div className="text-sky-950 text-xs font-medium leading-normal">Design</div>
</div>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    Design Thinking: The Beginner’s Guide    </h2>
    <div className='flex justify-between mt-3' >
        <div className='flex justify-center items-center gap-2'>
            <img src={combo} alt="" />
        <h1 className="text-zinc-500 text-sm font-normal leading-tight">15 Lessons (10h 5m)</h1>
        </div>

        <div className="w-16 h-9 px-4 py-2 bg-indigo-500 rounded-lg justify-center items-center gap-2.5 inline-flex">
  <div className="text-right text-white text-sm font-medium">$140</div>
</div>

    </div>
  </div>
</div>
{/* 3rd */}
<div className="card w-full h-full bg-base-100 shadow-xl">
  <figure className='px-2 pt-2 relative'><img src={card3} alt="Shoes" />
  <div className="w-24 h-7 px-2.5 py-0.5 bg-white rounded-md backdrop-blur-3xl justify-start items-start gap-2.5 inline-flex absolute top-2 right-2">
  <div className="text-sky-950 text-xs font-medium leading-normal">Scrath</div>
</div>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    Become a Ux Designer from Scratch   </h2>
    <div className='flex justify-between mt-3' >
        <div className='flex justify-center items-center gap-2'>
            <img src={combo} alt="" />
        <h1 className="text-zinc-500 text-sm font-normal leading-tight">15 Lessons (10h 5m)</h1>
        </div>

        <div className="w-16 h-9 px-4 py-2 bg-indigo-500 rounded-lg justify-center items-center gap-2.5 inline-flex">
  <div className="text-right text-white text-sm font-medium">$140</div>
</div>

    </div>
  </div>
</div>
{/* card4 */}

<div className="card w-full h-full bg-base-100 shadow-xl">
  <figure className='px-2 pt-2 relative'><img src={card4} alt="Shoes" />
  <div className="w-24 h-7 px-2.5 py-0.5 bg-white rounded-md backdrop-blur-3xl justify-start items-start gap-2.5 inline-flex absolute top-2 right-2">
  <div className="text-sky-950 text-xs font-medium leading-normal">Design</div>
</div>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    AWS Certified Solutions Architect - Associate 2021  </h2>
    <div className='flex justify-between mt-3' >
        <div className='flex justify-center items-center gap-2'>
            <img src={combo} alt="" />
        <h1 className="text-zinc-500 text-sm font-normal leading-tight">15 Lessons (10h 5m)</h1>
        </div>

        <div className="w-16 h-9 px-4 py-2 bg-indigo-500 rounded-lg justify-center items-center gap-2.5 inline-flex">
  <div className="text-right text-white text-sm font-medium">$140</div>
</div>

    </div>
  </div>
</div>

{/* card 5 */}
<div className="card w-full h-full bg-base-100 shadow-xl">
  <figure className='px-2 pt-2 relative'><img src={card5} alt="Shoes" />
  <div className="w-24 h-7 px-2.5 py-0.5 bg-white rounded-md backdrop-blur-3xl justify-start items-start gap-2.5 inline-flex absolute top-2 right-2">
  <div className="text-sky-950 text-xs font-medium leading-normal">4D Animation</div>
</div>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    Learning Maxon 4D Training Course  </h2>
    <div className='flex justify-between mt-3' >
        <div className='flex justify-center items-center gap-2'>
            <img src={combo} alt="" />
        <h1 className="text-zinc-500 text-sm font-normal leading-tight">15 Lessons (10h 5m)</h1>
        </div>

        <div className="w-16 h-9 px-4 py-2 bg-indigo-500 rounded-lg justify-center items-center gap-2.5 inline-flex">
  <div className="text-right text-white text-sm font-medium">$130</div>
</div>

    </div>
  </div>
</div>

{/* card6 */}

<div className="card w-full h-full bg-base-100 shadow-xl">
  <figure className='px-2 pt-2 relative'><img src={card6} alt="Shoes" />
  <div className="w-24 h-7 px-2.5 py-0.5 bg-white rounded-md backdrop-blur-3xl justify-start items-start gap-2.5 inline-flex absolute top-2 right-2">
  <div className="text-sky-950 text-xs font-medium leading-normal">Development</div>
</div>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    The Complete 2021 Web Development Bootcamp  </h2>
    <div className='flex justify-between mt-3' >
        <div className='flex justify-center items-center gap-2'>
            <img src={combo} alt="" />
        <h1 className="text-zinc-500 text-sm font-normal leading-tight">15 Lessons (10h 5m)</h1>
        </div>

        <div className="w-16 h-9 px-4 py-2 bg-indigo-500 rounded-lg justify-center items-center gap-2.5 inline-flex">
  <div className="text-right text-white text-sm font-medium">$120</div>
</div>

    </div>
  </div>
</div>

{/* card 7 */}


<div className="card w-full h-full bg-base-100 shadow-xl">
  <figure className='px-2 pt-2 relative'><img src={card7} alt="Shoes" />
  <div className="w-24 h-7 px-2.5 py-0.5 bg-white rounded-md backdrop-blur-3xl justify-start items-start gap-2.5 inline-flex absolute top-2 right-2">
  <div className="text-sky-950 text-xs font-medium leading-normal">Python</div>
</div>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    Python for Data Science and Machine Learning </h2>
    <div className='flex justify-between mt-3' >
        <div className='flex justify-center items-center gap-2'>
            <img src={combo} alt="" />
        <h1 className="text-zinc-500 text-sm font-normal leading-tight">15 Lessons (10h 5m)</h1>
        </div>

        <div className="w-16 h-9 px-4 py-2 bg-indigo-500 rounded-lg justify-center items-center gap-2.5 inline-flex">
  <div className="text-right text-white text-sm font-medium">$180</div>
</div>

    </div>
  </div>
</div>

{/* card 8 */}

<div className="card w-full h-full bg-base-100 shadow-xl">
  <figure className='px-2 pt-2 relative'><img src={card8} alt="Shoes" />
  <div className="w-24 h-7 px-2.5 py-0.5 bg-white rounded-md backdrop-blur-3xl justify-start items-start gap-2.5 inline-flex absolute top-2 right-2">
  <div className="text-sky-950 text-xs font-medium leading-normal">Artificial</div>
</div>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    Artificial Intelligence & Machine Learning </h2>
    <div className='flex justify-between mt-3' >
        <div className='flex justify-center items-center gap-2'>
            <img src={combo} alt="" />
        <h1 className="text-zinc-500 text-sm font-normal leading-tight">15 Lessons (10h 5m)</h1>
        </div>

        <div className="w-16 h-9 px-4 py-2 bg-indigo-500 rounded-lg justify-center items-center gap-2.5 inline-flex">
  <div className="text-right text-white text-sm font-medium">$160</div>
</div>

    </div>
  </div>
</div>

           </div>
        </>
    );
};

export default Courses;