
interface IProps{
    onChange: (value: string) => void;
    searchBarValue: string;
  }
  
  function SearchBar({onChange, searchBarValue}:IProps) {
    
    return (
      <div className="flex bg-primary-gray px-2 justify-center items-center my-auto w-full rounded">
      <input
        className="bg-primary-gray w-full p-3 align-left  text-sm rounded-md"
        value={searchBarValue} placeholder="Search..." onChange={(e)=>{onChange(e.target.value)}}
      ></input>
      </div>
    );
  }
  
  export default SearchBar;