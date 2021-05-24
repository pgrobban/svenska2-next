import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";

export type OperatingSystem = "iOS" | "Android" | "Windows" | "Mac OS";

interface InstallingSwedishKeyboardInstructionsDialogProps {
  dialogOpenForOperatingSystem: OperatingSystem | null | false;
  onClose: () => void;
}

const InstallingSwedishKeyboardInstructionsDialog: React.FC<InstallingSwedishKeyboardInstructionsDialogProps> = (
  props
) => {
  const { dialogOpenForOperatingSystem, onClose } = props;

  return (
    <Dialog
      open={!!dialogOpenForOperatingSystem}
      onClose={onClose}
      aria-labelledby="dialog-title"
      scroll="paper"
    >
      <DialogTitle id="dialog-title">
        How to add and use the Swedish keyboard - {dialogOpenForOperatingSystem}
      </DialogTitle>
      <DialogContent dividers>
        {dialogOpenForOperatingSystem === "iOS" && (
          <>
            <p>
              The following instructions should work on both iPhones and iPads
              running most recent versions of iOS.
            </p>
            <ol>
              <li>
                Open the <strong>Settings app</strong>.
              </li>
              <li>
                Tap <strong>General</strong>.
              </li>
              <li>
                Tap <strong>Keyboard</strong>.
              </li>
              <li>
                Tap the top menu option where it says{" "}
                <strong>Keyboards (number)</strong>.{" "}
              </li>
              <li>
                At the bottom, tap <strong>Add New Keyboard... </strong> button.{" "}
              </li>
              <li>Select Swedish. </li>
              <li>
                That is all for the setting. Open a text messaging app or tap
                the text input box on the bottom of this page so that the
                keyboard will open.
              </li>
              <li>
                Tap and hold the globe icon and move your finger to select the
                Swedish keyboard.
                <br />
                Quickly tap the globe icon to switch between Swedish and your
                last used keyboard.
              </li>
            </ol>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default InstallingSwedishKeyboardInstructionsDialog;
