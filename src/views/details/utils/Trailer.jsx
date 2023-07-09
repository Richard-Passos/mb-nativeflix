import { useState } from "react";
import { Portal, Modal, Button } from "react-native-paper";
import YoutubeIframe from "react-native-youtube-iframe";
import styles from "./styles";

const Trailer = ({ trailer }) => {
  const [play, setPlay] = useState(false);

  return (
    <>
      <Portal>
        <Modal
          visible={play}
          onDismiss={() => setPlay(false)}
          contentContainerStyle={styles.modal}
        >
          <YoutubeIframe height={300} play={play} videoId={trailer?.key} />
        </Modal>
      </Portal>

      <Button
        mode="contained"
        onPress={() => setPlay((state) => !state)}
        disabled={!trailer}
      >
        {!play ? "Play" : "Pause"} trailer
      </Button>
    </>
  );
};

export default Trailer;
