import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  FormControl,
  InputGroup,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import SellTokenModal from "./SellTokenModal";
import { useHistory } from "react-router-dom";
import { usePictures } from "../hooks/usePictures";
import { useKlaytn } from "../hooks/useKlaytn.js";

const CardsSell: React.FC<any> = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const { sellToken } = useKlaytn();
  const { setTokenOnSale } = usePictures();
  //console.log(props);
  const [price, setPrice] = useState<any>(null);
  const handleChange = (e: any) => {
    setPrice(e.target.value);
  };
  const [errors, setErrors] = useState<any>(undefined);
  async function setOnSale() {
    try {
      setErrors(undefined);
      await setTimeout(() => {
        console.log("wait");
      }, 200000);
      const amount = price.toString();
      console.log(parseFloat(price));
      console.log(parseFloat(price));
      const { data } = await setTokenOnSale({
        token_id: props.value.token_id,
        picture_price: parseFloat(price),
      });
      props.setUpdateToken(new Date().getMilliseconds());
      await sellToken(props.value.token_id, amount);
    } catch (err) {
      const isAxiosError = err?.isAxiosError ?? false;
      if (isAxiosError) {
        const {
          response: { data },
        } = err;
        console.log(data);
        setErrors(data);
        console.log(err);
      }
    }
  }

  const sellHandle = () => {
    if (!price) {
      alert("값을 입력하세요");
      return;
    }
    setModalShow(true);
  };
  const history = useHistory();
  const onClickHandler = () => {
    history.push({
      pathname: "/viewPictures/info",
      state: { information: props.value, mypage: true },
    });
  };
  const [src, setSrc] = useState(props.value.picture_url);
  const imageErrorHandler = () => {
    setSrc("../tempImages/noimage.png");
  };
  return (
    <Col
      style={{
        padding: "0.7rem",
      }}
    >
      <Card
        style={{ borderColor: "green" }}
        className="shadow p-3 mb-5 bg-white rounded"
      >
        <Card.Img
          variant="bottom"
          src={src}
          onError={() => imageErrorHandler()}
          style={{ width: "100%", height: "12rem" }}
        />
        <Card.Body style={{ height: "260px" }}>
          <Card.Text
            style={{
              fontWeight: "bold",
              marginBottom: "0.3rem",
              maxWidth: "100%",
            }}
            className="d-inline-block text-truncate"
          >
            제목 : {props.value.picture_title}
          </Card.Text>
          <ListGroup className="list-group-flush">
            <ListGroupItem className="d-inline-block text-truncate">
              사진 ID : {props.value.token_id}
            </ListGroupItem>
            <ListGroupItem className="d-inline-block text-truncate">
              가격 : {props.value.picture_price} klay
            </ListGroupItem>
          </ListGroup>
          <Button
            className="d-inline-block text-truncate"
            variant="dark"
            onClick={onClickHandler}
            style={{ marginTop: "0.8rem" }}
          >
            자세히 보기
          </Button>
          <InputGroup className="mb-3" style={{ marginTop: "1rem" }}>
            <FormControl
              className="d-inline-block text-truncate"
              placeholder="가격(klay)"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              style={{ textAlign: "center" }}
              onChange={handleChange}
            />
            <Button
              className="d-inline-block text-truncate"
              variant="success"
              id="button-addon2"
              onClick={sellHandle}
            >
              판매하기
            </Button>
          </InputGroup>
        </Card.Body>
      </Card>
      <SellTokenModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        setOnSale={setOnSale}
        setUpdateToken={props.setUpdateToken}
        token_id={props.value.token_id}
        picture_title={props.value.picture_title}
        picture_price={props.value.picture_price}
        sell_price={parseFloat(price)}
      />
    </Col>
  );
};
export default CardsSell;
