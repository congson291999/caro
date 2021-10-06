import React, { Component } from "react";
import Row from "./board/row";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbercell: null,
      show: false
    };
  }

  render() {
    const {
      setNumberCell,
      array_board,
      tick,
      piece_current,
      is_win,
      pieces_win,
      reset_map
    } = this.props;
    return (
      <div>
        <div className="container">
          {array_board === null ? (
            <div className="input-custom">
              <input
                type="number"
                placeholder="CELL MUMBER"
                min="5"
                max="20"
                required
                onChange={event => {
                  this.setState({ numbercell: event.target.value });
                }}
                onKeyPress={event => {
                  if (event.key === "Enter") {
                    if (
                      this.state.numbercell === null ||
                      (!Number.isInteger(this.state.numbercell) &&
                        (parseInt(this.state.numbercell) < 5 ||
                          parseInt(this.state.numbercell) > 20))
                    ) {
                      alert("Invalid data!!!! Cell number min=5 and max 20");
                      return;
                    }
                    setNumberCell(this.state.numbercell);
                  }
                }}
              />
            </div>
          ) : (
            <div className="row board">
              <div className="col-md-10">
                {array_board.map((e, index) => (
                  <div>
                    <Row
                      key={index}
                      elements={e}
                      tick={(row, col) => tick(row, col)}
                      row={index}
                      pieces_win={pieces_win}
                    />
                  </div>
                ))}
              </div>
              <div className="col-md-2 information">
                <p className="title">GAME INFOR </p>
                <p>NEXT PLAYER: {piece_current}</p>

                <p>
                  {" "}
                  Result :{" "}
                  {is_win === 1 ? (
                    <span>{piece_current} WIN</span>
                  ) : is_win === 0 ? (
                    <span>NO WINNER</span>
                  ) : <span>NO WINNER</span>}
                </p>
                {/* <span className="noti">Note: Blocking both ends will not win</span> */}
                <button onClick={() => reset_map()} className="btn btn-info">
                  NEW GAME
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Home;
