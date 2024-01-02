// import apiCodetoString from "@/lib/apiCodetoString";
// import ptyCode from "@/lib/ptyCode";

// type ApiData = {
//     baseDate: string;
//     baseTime: string;
//     category: string;
//     nx: number;
//     ny: number;
//     obsrValue?: string; //초단기용
//     fcstDate?: string; //포함
//     fcstTime?: string; //같은걸 묶기
//     fcstValue?: string;
// };

// function callJsonApi(url: string) {
//     const data = fetch(url)
//         .then((response) => response.json())
//         .catch((error) => {
//             console.error("API 호출 중 오류가 발생했습니다:", error);
//         });

//     return data;
// }

// async function Today() {
//     const key = process.env.NEXT_PUBLIC_DATA_GO_KEY;
//     const pageNo = "1";
//     const numOfRows = "1000";
//     const base_date = "20231214";
//     const base_time = "0500";
//     const nx = "55";
//     const ny = "127";
//     // getVilageFcst 단기
//     // getUltraSrtNcst 초단기
//     const apiUrl = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${key}&pageNo=${pageNo}&numOfRows=${numOfRows}&dataType=JSON&base_date=${base_date}&base_time=${base_time}&nx=${nx}&ny=${ny}`;

//     const items = await callJsonApi(apiUrl);
//     console.log(items.response);
//     const item = items.response.body.items.item;

//     // return (
//     //     <div>
//     //         {item.map((data: ApiData, i: number) => {
//     //             return (
//     //                 <div key={i}>
//     //                     <p>
//     //                         {apiCodetoString[data.category].name} :{" "}
//     //                         {data.category == "PTY" ? ptyCode[data.obsrValue].name : data.obsrValue}{" "}
//     //                         {apiCodetoString[data.category].unit}
//     //                     </p>
//     //                 </div>
//     //             );
//     //         })}
//     //     </div>
//     // );
//     return (
//         <div>
//             {item.map((data: ApiData, i: number) => {
//                 return (
//                     <div key={i}>
//                         <p>
//                             {apiCodetoString[data.category].name} : {data.fcstValue}{" "}
//                             {apiCodetoString[data.category].unit}
//                         </p>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// }

// export default Today;
