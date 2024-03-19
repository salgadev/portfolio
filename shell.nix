let
  nixpkgs = fetchTarball "https://github.com/NixOS/nixpkgs/tarball/nixos-23.11";
  pkgs = import nixpkgs { config = {}; overlays = []; };
in

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs_21
  ];

  shellHook = ''
    # Check if node_modules directory exists and if not, run npm install
    if [ ! -d node_modules ]; then
      echo "Installing project dependencies..."
      npm install
    fi

    # Install Tailwind CSS and its peer dependencies
    echo "Installing Tailwind CSS, PostCSS, and Autoprefixer..."
    npm install -D prettier tailwindcss postcss autoprefixer @catppuccin/tailwindcss

    # Optionally, you can run 'npm run dev' automatically, but it might be better to run it manually
    # echo "Starting the development server..."
    # npm run dev
  '';
}
