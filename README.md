# LightDM Webkit2 Theme LXA

This is a custom LightDM Webkit2 theme built using React, TypeScript, styled-components, and Parcel. The theme is designed to provide a modern, responsive login interface for LightDM with an attractive user experience.

## Features

- Modern and minimalistic login form
- Responsive design that adapts to various screen sizes
- Customizable input fields and login button styles using `styled-components`
- React and TypeScript-based architecture for better type safety and maintainability

## Prerequisites

- Node.js (>= 14.x)
- npm or yarn
- LightDM with Webkit2 enabled (for using custom web-based themes)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/pankajackson/lightdm-webkit-theme-lxa.git
   cd lightdm-webkit-theme-lxa
   ```

2. **Install the dependencies:**

   Run the following command to install the required dependencies using npm:

   ```bash
   npm install
   ```

3. **Build the theme:**

   After installing the dependencies, you can build the project by running:

   ```bash
   npm run build
   ```

   This will generate the theme files in the `dist` directory.

4. **Copy the theme to the LightDM Webkit2 theme directory:**

   After building the theme, you need to copy the contents of the `dist` directory to your LightDM Webkit2 theme directory (usually `/usr/share/lightdm-webkit/themes/` or similar depending on your system).

   ```bash
   sudo cp -r dist/* /usr/share/lightdm-webkit/themes/your-theme-name/
   ```

5. **Set LightDM to use the new theme:**

   Update LightDM's configuration file to use your custom theme. This file is usually located at `/etc/lightdm/lightdm.conf`. Add or modify the following line:

   ```ini
   [SeatDefaults]
   greeter-session=lightdm-webkit2-greeter
   webkit-theme=your-theme-name
   ```

6. **Restart LightDM:**

   After setting the theme in LightDM's configuration, restart LightDM:

   ```bash
   sudo systemctl restart lightdm
   ```

## Development

To start the development server and view the theme in a browser:

1. Run the following command:

   ```bash
   npm run start
   ```

2. The theme will be served locally. You can view it in your browser at `http://localhost:1234`.

   > Note: Make sure to update the theme files in your LightDM theme directory after making any changes.

## File Structure

The file structure of the project is as follows:

```
lightdm-webkit2-theme/
├── dist/                # Built theme files
├── node_modules/        # Installed npm dependencies
├── public/              # Static files (e.g., images, icons)
├── src/                 # Source code
│   ├── components/      # Reusable React components (e.g., InputField, LoginButton)
│   ├── App.tsx          # Main React component
│   ├── index.tsx        # Entry point for the React app
│   ├── style.css        # Global styles
│   └── index.html       # HTML template for the app
├── .gitignore           # Git ignore file
├── package.json         # Project metadata and dependencies
├── package-lock.json    # NPM lock file
└── README.md            # Project documentation
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [styled-components](https://styled-components.com/)
- [Parcel](https://parceljs.org/)
- [LightDM](https://github.com/lightdm/lightdm)

```

### Explanation of sections:

1. **Features:** Describes the main features of the project.
2. **Prerequisites:** Lists the software requirements.
3. **Installation:** Step-by-step guide on how to install and set up the project.
4. **Development:** Instructions for running a local development server.
5. **File Structure:** A breakdown of the project’s folder and file structure.
6. **License:** Information about the license for the project.
7. **Acknowledgements:** Acknowledging the libraries used in the project.

This `README.md` should give users a clear understanding of the project and how to set it up and use it. Feel free to customize it based on your needs!
```
