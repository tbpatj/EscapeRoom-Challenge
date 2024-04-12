module.exports = {
  defaultConfig: {
    extends: "@parcel/config-default",
  },
  transformers: {
    "*.{js,jsx}": ["@parcel/transformer-react-refresh-wrap"],
  },
};
