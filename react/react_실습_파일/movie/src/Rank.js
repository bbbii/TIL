import axios from "axios";
import { Button, Container, Table } from "react-bootstrap";
import { useState } from "react";

function Rank() {
  const [ranks, setRanks] = useState(null);
  // 영화진흥위원회 일별 박스오피스 정보 가져오기
  // axios 사용
  let getRank = () => {
    // axios.get("정보를 가져올 주소").then(데이터가 성공적으로 도착한 뒤 해야할 작업).catch(실패했을 때 해야할 작업);

    axios
      .get(
        "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20221120"
      )
      .then((response) => {
        // console.log(response);
        // console.log(response.data);
        // 데이터 중에서 10개 순위만 가져오게 됨
        // console.log(response.data.boxOfficeResult.dailyBoxOfficeList);
        let movieList = response.data.boxOfficeResult.dailyBoxOfficeList;
        setRanks(movieList);
      })
      .catch(() => {
        console.log("데이터 로드 실패");
      });
  };
  let displayData = null;

  if (ranks) {
    displayData = (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-center">순위</th>
            <th className="text-center">증감</th>
            <th className="text-center">영화명</th>
            <th className="text-center">누적관객수</th>
          </tr>
        </thead>
        <tbody>
          {ranks.map((movie) => (
            <tr>
              <td className="text-center">{movie.rank}</td>
              <td className="text-center">{movie.rankInten}</td>
              <td>{movie.movieNm}</td>
              <td className="text-end">{movie.audiAcc}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  return (
    <>
      <Container className="mt-5">
        <Button onClick={getRank} variant="outline-primary" className="mb-3">
          영화 순위 가져오기
        </Button>
        {displayData}
      </Container>
    </>
  );
}

export default Rank;
