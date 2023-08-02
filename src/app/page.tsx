
import Image from 'next/image'

export default function Home(){
  return (
    <div className='w-full sm:w-1/2  mx-auto mt-10'>
      <div className="text-center justify-content-center ">
        
        
        <Image className="mx-auto rounded-full pt-4" src={'/images/profile.jpg'} alt='' width="350" height="350"/>
        <div className='px-8 sm:px-0'>

          <p className="text-3xl font-semibold pt-4 pb-0 mb-0">Simone Wolfe</p>
          
          <p className="text-xl font-normal pt-0 mt-0">Autorin</p>

          <p className="text-m pt-3">Simone Wolfe, geboren 1982 in Stadthagen, siedelt nach dem Abitur und einer Ausbildung für 14 Jahre nach Georgia, USA um. 2018 zieht sie nach einer erfolgreichen Karriere im Hotelwesen nach Deutschland zurück. Heute lebt sie gemeinsam mit ihrem amerikanischen Mann, ihren zwei Kindern und dem Familienhund in Bayern. Die Grundidee für die Abenteuer der Romanfigur Marla hatte sie bereits in ihrer Jugend. Nach der Rückkehr in die Heimat findet sie ihre handgeschriebenen Manuskriptseiten wieder und stürzt sich erneut auf diese Idee.</p>

        </div>
      
      </div>
    </div>
  )
}