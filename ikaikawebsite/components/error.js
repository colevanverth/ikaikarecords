import Image from "next/image";

const Error = ({description}) => {
  return (
      <div className="error">
            <div className="error__grouping"> 
            <Image
              src="/error.svg" 
              width="27"
              height="27"
            />
            <h4> ERROR </h4>
            </div> 
            <p> {description} </p>
          </div>
  );
};

export default Error;
