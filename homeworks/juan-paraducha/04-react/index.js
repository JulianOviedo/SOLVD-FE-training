const TRAFFIC_STATES = ['#DF4040', '#E9EC6A', '#04CA00'];

const App = () => {
  const [activeLight, setActiveLight] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveLight(prev => (prev + 1 > 2 ? 0 : prev + 1));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="trafficLight">
      <div className="trafficLight__pole"></div>
      <div className="trafficLight__body">
        {[0, 1, 2].map(i => (
          <div
            key={i}
            className="trafficLight__body__light"
            style={{
              backgroundColor: i === activeLight ? TRAFFIC_STATES[i] : '',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
