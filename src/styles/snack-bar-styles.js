export const snackBarStyles = `
  .snack__wrapper {
    align-items: center;
    border-color: transparent;
    display: flex;
    text-align: center;
    margin: 8px 16px;
    max-width: 672px;
    min-height: 32px;
    min-width: 344px;
    padding: 0;
    pointer-events: auto;
    position: relative;
    transition-duration: .15s;
    transition-property: opacity,transform;
    transition-timing-function: cubic-bezier(0,0,.2,1);
  }

  .snack {
    bottom: 0;
    display: flex;
    font-size: .875rem;
    font-family: Gilroy, "Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif;
    justify-content: center;
    left: 0;
    pointer-events: none;
    right: 0;
    width: 100%;
    background-color: #881f1aa0;
    border-color: #881f1a;
    border-radius: 4px;
    color: #fff;
    top: 110%;
    position: fixed;
    height: fit-content;
    z-index: 5;
  }

  .snack__content {
    flex-grow: 1;
    font-size: .875rem;
    font-weight: 400;
    letter-spacing: .0178571429em;
    line-height: 1.25rem;
    text-align: initial;
  }

  .snack-bar-content {
    max-width: ${window.innerWidth < 420 ? '50%' : '80%'};
    margin-left: auto;
    margin-right: auto;
  }
`
