function screenLockCheck(orientation) {
  if (screen.orientation && screen.orientation.lock) {
    screen.orientation.lock(orientation).catch(function (error) {
      console.log('Orientation lock failed - THIS IS FINE ON A NON-ROTATABLE DEVICE:', error);
    });
  } else {
    console.log('Orientation lock is not supported on this device.');
  }
}

export function setScreenLockToPortrait() {
  screenLockCheck('portrait-primary');
}

export function setScreenLockToLandscape() {
  screenLockCheck('landscape-primary');
}
