import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 1000,
});

// export const fetchData = async () => {
//   let data = {date: "2024-10-16", species: "WesternCherry", reqData: "dayDegreeDay"};
//   console.log('fetching data');

//   try {
//     // fetch("http://localhost:8080/getpost", {
//     //   method: "POST",
//     //   headers: {'Content-Type': 'application/json'},
//     //   body: JSON.stringify(data)
//     // })

//     const response = await axios.post('http://localhost:8080/getpost',{
//       date: '2024-10-16',
//       species: 'WesternCherry',
//       reqData: 'dayDegreeDay'
//     })
//     console.log(response.data)
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching data: ', error);
//     // Handle errors here or throw them to be handled where the function is called
//     throw error;
//   }
// };

// export const GetData = async => {
//   const [data, setData] = useState({});
//   const info = {
//     date: '2024-10-16',
//     species: 'WesternCherry',
//     reqData: 'dayDegreeDay',
//   };
//   try {
//     useEffect(() => {
//       fetch('http://localhost:8080/get', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(info),
//       })
//         .then(res => res.json())
//         .then(data => setData(data));
//     }, []);
//     return (
//       <div>
//         <div>{data}</div>
//       </div>
//     );
//   } catch (error) {
//     console.error('Error fetching data: ', error);
//     throw error;
//   }
// };

export function GetData() {
  const [data, setData] = useState({});
  const info = {
    date: '2024-10-16',
    species: 'WesternCherry',
    reqData: 'dayDegreeDay',
  };

  useEffect(() => {
    fetch('http://localhost:8080/get', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info),
    })
      .then(res => res.json())
      .then(data => setData(data));
  }, []);
  return (
    <div>
      <div>{data}</div>
    </div>
  );
}
