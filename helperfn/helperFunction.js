class Util {

    static trimText(text ,  length){
        return text?.length > length? text?.substring(0, length) + "..." : text;
      }

      static generateTitleString = (heading, lastN = 1) => {
        const title = heading.split(' ');
        return title.map((word, index) => {
          const isHighlighted = index >= title.length - lastN;
          return (
            <span
              key={index}
              className={isHighlighted ? 'text-primary font-semibold' : ''}
            >
              {word}{' '}
            </span>
          );
        });
      };
      

    static errorDisplay = (error)=>{
      return  <div className='h-[150px] w-full flex justify-center items-center text-center'>
            <p className='sm:text-[18px] text-red'>  { error || "Data Not Found"} </p>
        </div>
    }
    
    
}


export default Util;