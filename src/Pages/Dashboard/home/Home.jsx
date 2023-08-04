/* eslint-disable react/prop-types */
import icon1 from '../../../assets/picture/Icon1.png'
import icon2 from '../../../assets/picture/Icon2.png'
import icon3 from '../../../assets/picture/Icon3.png'
import icon4 from '../../../assets/picture/Icon4.png'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';




const Home = () => {
    const data = [
        { name: 'Jan', pv: 20 },
        { name: 'Feb', pv: 25 },
        { name: 'Mar', pv: 15 },
        { name: 'Apr', pv: 30 },
        { name: 'May', pv: 40 },
        { name: 'June', pv: 20 },
        { name: 'July', pv: 60 },
        { name: 'Aug', pv: 20 },
      ];

      const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
                <div className="custom-tooltip">
                    <p>{`${data.name}: ${data.pv}%`}</p>
                </div>
            );
        }
        return null;
    };
   
    return (
        <>
            <div className="flex gap-5 p-10">

                {/* 1st one */}

                <div className="w-96 h-48 px-6 py-7 bg-white rounded-2xl flex-col justify-start items-start gap-2.5 inline-flex shadow-lg">
  <div className="self-stretch grow shrink basis-0 flex-col justify-between items-start gap-6 flex">
    <div className="justify-start items-center gap-4 inline-flex">
      <div className="w-12 h-12 relative">
        <div className="w-12 h-12 left-0 top-0 absolute bg-gradient-to-bl from-purple-500 to-blue-500 rounded-3xl" />
        <div className="w-6 h-6 left-[12px] top-[12px] absolute">
          <img className="w-4 h-4 left-[3px] top-[3px] absolute" src={icon1} />
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-0.5 inline-flex">
        <div className="text-sky-950 text-2xl font-semibold leading-9">55</div>
        <div className="text-zinc-500 text-xs font-normal leading-none">Course completed</div>
      </div>
    </div>
    <div className="self-stretch justify-start items-center gap-6 inline-flex">
      <div className="grow shrink basis-0 h-1 relative">
        <div className="w-64 h-1 left-0 top-0 absolute opacity-5 bg-sky-950 rounded-2xl" />
        <div className="w-52 h-1 left-0 top-0 absolute bg-blue-500 rounded-2xl" />
      </div>
      <div className="text-right text-sky-950 text-sm font-medium leading-tight">70%</div>
    </div>
  </div>
</div>
{/* 2nd one */}

<div className="w-96 h-48 px-6 py-7 bg-white rounded-2xl flex-col justify-start items-start gap-2.5 inline-flex shadow-lg">
  <div className="self-stretch grow shrink basis-0 flex-col justify-between items-start gap-6 flex">
    <div className="justify-start items-center gap-4 inline-flex">
      <div className="w-12 h-12 relative">
        <div className="w-12 h-12 left-0 top-0 absolute bg-gradient-to-bl from-orange-300 to-red-500 rounded-3xl" />
        <div className="w-6 h-6 left-[12px] top-[12px] absolute">
          <img className="w-3.5 h-5 left-[5px] top-[2px] absolute" src={icon2} />
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-0.5 inline-flex">
        <div className="text-sky-950 text-2xl font-semibold leading-9">20</div>
        <div className="text-zinc-500 text-xs font-normal leading-none">Certificate earned</div>
      </div>
    </div>
    <div className="self-stretch justify-start items-center gap-5 inline-flex">
      <div className="grow shrink basis-0 h-1 relative">
        <div className="w-64 h-1 left-0 top-0 absolute opacity-5 bg-sky-950 rounded-2xl" />
        <div className="w-20 h-1 left-0 top-0 absolute bg-red-400 rounded-2xl" />
      </div>
      <div className="text-right text-sky-950 text-sm font-medium leading-tight">20%</div>
    </div>
  </div>
</div>

{/* 3rd */}
<div className="w-96 h-48 px-6 py-7 bg-white rounded-2xl flex-col justify-start items-start gap-2.5 inline-flex shadow-lg">
  <div className="self-stretch grow shrink basis-0 flex-col justify-between items-start gap-6 flex">
    <div className="justify-start items-center gap-4 inline-flex">
      <div className="w-12 h-12 relative">
        <div className="w-12 h-12 left-0 top-0 absolute bg-gradient-to-bl from-orange-400 to-yellow-400 rounded-3xl" />
        <div className="w-6 h-6 left-[12px] top-[12px] absolute">
          <img className="w-3.5 h-5 left-[5px] top-[2px] absolute" src={icon3} />
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-0.5 inline-flex">
        <div className="text-sky-950 text-2xl font-semibold leading-9">25</div>
        <div className="text-zinc-500 text-xs font-normal leading-none">Course in progress</div>
      </div>
    </div>
    <div className="self-stretch justify-start items-center gap-5 inline-flex">
      <div className="grow shrink basis-0 h-1 relative">
        <div className="w-64 h-1 left-0 top-0 absolute opacity-5 bg-sky-950 rounded-2xl" />
        <div className="w-28 h-1 left-0 top-0 absolute bg-amber-400 rounded-2xl" />
      </div>
      <div className="text-right text-sky-950 text-sm font-medium leading-tight">30%</div>
    </div>
  </div>
</div>

{/* 4rd */}

<div className="w-96 h-48 px-6 py-7 bg-white rounded-2xl flex-col justify-start items-start gap-2.5 inline-flex shadow-lg">
  <div className="self-stretch grow shrink basis-0 flex-col justify-between items-start gap-6 flex">
    <div className="justify-start items-center gap-4 inline-flex">
      <div className="w-12 h-12 relative">
        <div className="w-12 h-12 left-0 top-0 absolute bg-gradient-to-b from-green-500 to-emerald-400 rounded-3xl" />
        <div className="w-6 h-6 left-[12px] top-[12px] absolute">
          <img className="w-4 h-4 left-[4px] top-[3px] absolute" src={icon4} />
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-0.5 inline-flex">
        <div className="text-sky-950 text-2xl font-semibold leading-9">86</div>
        <div className="text-zinc-500 text-xs font-normal leading-none">Total Course </div>
      </div>
    </div>
    <div className="self-stretch justify-start items-center gap-4 inline-flex">
      <div className="text-blue-500 text-sm font-medium leading-tight">View Courses</div>
    </div>
  </div>
</div>



            </div>

            {/* rechart */}


            <div className="w-96 text-zinc-800 text-lg font-semibold">Your  Daily Progress</div>
  <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        
          
     
     
          
        </>
    );
};

export default Home;