var tiles = [];
var pictures = [];

function addNewTile() {
    tiles.push(pictures[Math.floor(Math.random() * pictures.length)]);
    renderApp();
}

function refreshAll() {
    tiles = tiles.map(i => pictures[Math.floor(Math.random() * pictures.length)]);
    renderApp();
}

const AddNew = () => {
    return (
        <div className="add-new-tile" onClick={() => addNewTile()}>
            <div className="plus-sign-y"></div>
            <div className="plus-sign-x"></div>
        </div>
    );
}

const Tile = ({ url, index }) => {
    function refreshOne(tileKey) {
        const index = tiles.findIndex((i, index) => index === tileKey);
        if (index !== -1) {
            tiles[index] = pictures[Math.floor(Math.random() * pictures.length)];
            renderApp();
        }
    }

    return (
        <div className="image-container" onClick={() => refreshOne(index)}>
            <div className="base-image" style={{ backgroundImage: `url(${url})` }} src={url} alt="picture" index={index}></div>
            <div className="overlay-image">
                <svg viewBox="0 0 64 64" fill="#02CC67" xmlns="http://www.w3.org/2000/svg">
                    <g id="arrow-refresh-transfer-user_interface-interface" data-name="arrow-refresh-transfer-user interface-interface">
                        <path d="m59.008 34a2.921 2.921 0 0 0 -2.208-1.023h-.116a3.032 3.032 0 0 0 -2.966 2.616 21.653 21.653 0 0 1 -15.968 17.678 22.064 22.064 0 0 1 -23.792-8.7 1 1 0 0 1 .822-1.571h5.22a2 2 0 0 0 0-4h-16v16a2 2 0 0 0 4 0v-5.34a1 1 0 0 1 1.793-.608 28 28 0 0 0 49.874-12.721 2.9 2.9 0 0 0 -.659-2.331z" fill="none" />
                        <path d="m44 25h16v-16a2 2 0 0 0 -4 0v5.34a1 1 0 0 1 -1.793.608 28 28 0 0 0 -49.853 12.582 3.006 3.006 0 0 0 2.971 3.47 3.029 3.029 0 0 0 2.966-2.588 21.993 21.993 0 0 1 39.751-8.983 1 1 0 0 1 -.822 1.571h-5.22a2 2 0 0 0 0 4z" />
                    </g>
                </svg>
            </div>
        </div>
    );
}

let rootContainer = null;

function renderApp() {
    const root = document.getElementById("root");
    const rootElement = React.createElement(App);
    if (!rootContainer) {
        rootContainer = ReactDOM.createRoot(root);
    }
    rootContainer.render(rootElement);
}

const App = () => {
    React.useEffect(() => {
        $.ajax({
            url: 'https://tinyfac.es/api/data?limit=50&quality=0',
            dataType: 'json',
            success: function (data) {
                pictures = data.map(i => i.url);
            }
        });
    }, []);

    return (
        <div className="container">
            {tiles.map((url, index) => {
                return <Tile key={index} index={index} url={url} />
            })}
            <AddNew />
            <div style={{ width: "90vw", display: "inline-block" }}>
                <button onClick={() => refreshAll()} className="refresh-button">
                    Refresh all
                </button>
            </div>
        </div>
    );
}

renderApp();
