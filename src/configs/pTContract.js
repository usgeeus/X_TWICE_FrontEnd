import caver from "./klaytn";
// import Caver from "caver-js";
//declare const DEPLOYED_ABI: string;
//declare const DEPLOYED_ADDRESS: string;

const KlaystagramContract =
  /*
  DEPLOYED_ABI &&
  DEPLOYED_ADDRESS && */
  new caver.klay.Contract(DEPLOYED_ABI, DEPLOYED_ADDRESS);

/* const BAOBAB_TESTNET_RPC_URL = "https://api.baobab.klaytn.net:8651/";

const rpcURL = BAOBAB_TESTNET_RPC_URL;

const caver = new Caver(rpcURL);

const KlaystagramContract = new caver.klay.Contract(
  DEPLOYED_ABI,
  DEPLOYED_ADDRESS
); */

export default KlaystagramContract;
