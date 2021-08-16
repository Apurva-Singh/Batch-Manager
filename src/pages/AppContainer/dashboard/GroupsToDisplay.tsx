import { meSelector } from "../../../selectors/auth.selectors";
import { groupQuerySelector, groupSelector } from "../../../selectors/groups.selectors";
import { useAppSelector } from "../../../store";
import GroupDisplay from "./GroupDisplay";
import Nav from './Nav';
import SecondaryNav from "./SecondaryNav";
import { groupsLoadingSelector } from './../../../selectors/groups.selectors';
import { FaSpinner } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { groupsQueryChangedAction } from './../../../actions/groups.actions';

interface Props{
 
}

const GroupsToDisplay: React.FC<Props>=(props)=>{
    const query = useAppSelector(groupQuerySelector);
  const loading= useAppSelector(groupsLoadingSelector);
  const groups = useAppSelector(groupSelector);

  const user = useAppSelector(meSelector);
  // const history = useHistory();
  // const {user}= useContext(AppContext);

  // const [reload, setReload] = useState(0);
  // const [users, setUsers] = useState<any>([]);

  // const [query, setQuery]= useState('');

  const dispatch = useDispatch();
  

  // useEffect(() => {




    // getGroup({status: "all-groups", query:`${query}`})
    // .then((response)=>
    // {
    //         setUsers(response);
    //     console.log(response);
    //     }

    // ).catch(()=>[
    //     console.error("not found")

    // ]);

  //   getGroups({ status: "all-groups", query }).then((groups) => {
  //     dispatch({
  //       type: GROUP_QUERY_COMPLETED,
  //       payload: { groups: groups, query: query },
  //     });
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [query]);

  //     const handleChange=(e: any)=> {
  //         setQuery(e.target.value);

  //  };
  

    return(
        <div>
            <Nav />
            <SecondaryNav />
         
      <div className="flex space-x-2 items-center md:max-w-xl justify-center pt-20 mx-auto">
        <input
          type="text"
          placeholder="Search here.."
          className="px-2 border-2 rounded-lg h-10 mt-2  sm:mt-1 ml-4 focus:outline-none bg-gray-50 border-gray-400"
          defaultValue={query}
          onChange={(e) => {  
            dispatch(groupsQueryChangedAction(e.target.value));
            // groupActions.queryChanged(e.target.value);

            // getGroups({query: e.target.value, status: "all-groups"});
            
            // dispatch({ type: "groups/query", payload: e.target.value });
          }}
        />

        {/* <Button 
          theme="primary"
          btnType="outline"
          // onClick={(e) => {
          //   setReload(reload + 1);
          // }}
        // >
        //   Search
        // </Button> */}
        
      </div>
      <div className="flex flex-col mt-8 max-w-sm mx-auto md:pl-40 lg:pl-0 ">
        <div className=" m-auto text-36">
          
        {loading &&  <FaSpinner className="mt-5 animate-spin mx-auto}"></FaSpinner>} 
          Welcome! <span className="text-primary">{user!.first_name} </span>
          <h1 className="flex m-auto justify-center text-primary font-bold text-36">
            Groups
          </h1>
        </div>
        {
        groups.length > 0 && !loading ? (
          <div className="-z-99">
            {groups.map((group) => (
              <GroupDisplay
                id={group!.id}
                name={group.name}
                imgUrl={group.group_image_url}
                key={group.id}
                description={group.description}
              
                
              />
            ))}
          </div>
        ) : (
          <div className="text-red-600 m-auto"> No results to display </div>
        )}
      </div>
        </div>
    );
};
GroupsToDisplay.defaultProps={
}

export default GroupsToDisplay;