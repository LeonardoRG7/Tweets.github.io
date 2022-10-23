import React, { useState } from "react";
import { Fab } from "@material-ui/core";
import "../scss/SendTweets.scss";
import AddIcon from "@material-ui/icons/Add";
import moment from "moment";
import ModalContainer from "./ModalContainer";
import FormSendTweet from "./FormSendTweet";
import { TWEETS_STORAGE } from "../utils/contans";

export default function SendTweets(props) {
  const { setToastProps, allTweets } = props;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const sendTweet = (event, formValue) => {
    event.preventDefault();
    const { name, tweet } = formValue;
    let allTweetArray = [];

    if (allTweets) {
      allTweetArray = allTweets;
    }

    if (!name || !tweet) {
      setToastProps({
        open: true,
        text: "WARNING: Todos los campos son obligatorios!"
      });
    } else {
      formValue.time = moment();
      allTweetArray.push(formValue);
      localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweetArray));
      setToastProps({
        open: true,
        text: "Excelente! Enviado correctamente",
      });
      closeModal();
    }
    allTweetArray = [];
  };

  return (
    <div className="SendTweets">
      <Fab
        className="SendTweets_open"
        color="primary"
        aria-label="add"
        onClick={openModal}
      >
        <AddIcon />
      </Fab>
      <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
        <FormSendTweet sendTweet={sendTweet} />
      </ModalContainer>
    </div>
  );
}
