import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {Context} from '../Context'
import {useContext} from 'react'
import {InputGroup, FormControl, Col, Row } from "react-bootstrap";


export default function Search() {
  const {
    setSearchReq
  } = useContext(Context)

  const search = (e) => {
    setSearchReq(e.target.value)
  }

  return (
    <div className='search-container'>
      <Row className="justify-content-md-center">
        <Col md={4}>
          <InputGroup className="mb-2">
            <InputGroup.Prepend>
              <InputGroup.Text id="input-search"  className="bg-white">
                <FontAwesomeIcon icon={faSearch}/>
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              onChange={search}
              placeholder="Filter by author..."
              aria-describedby="input-search"
            />
          </InputGroup>
        </Col>
      </Row>
    </div>
  )
}