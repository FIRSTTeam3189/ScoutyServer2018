import { isStrEmpty } from '../string_utils'
export class ScoutyTeam {
  /**
   * This creates a Scouty Team, where we store a Teams number, nickname, website
   *
   * @param {any} baTeamJson
   */
  constructor (baTeamJson) {
    this.teamNumber = baTeamJson.team_number
    this.key = baTeamJson.key
    this.name = baTeamJson.name
    this.website = baTeamJson.website
    this.rookieYear = baTeamJson.rookie_year
    this.nickname = !isStrEmpty(baTeamJson.nickname) ? baTeamJson.nickname : baTeamJson.name
  }

  /*
  // Gets the team number of the current team - such as 3189
  get number () {
    return this._teamNumber
  }

  // Returns the key used within blue alliance and scouty server - is the form of frc####
  get key () {
    return this._key
  }

  // Returns the name of the team with all of the sponsers in it.
  get fullName () {
    return this._name
  }

  // Returns the team's website
  get website () {
    return this._website
  }

  // Returns the first year the team competed
  get rookieYear () {
    return this._rookieYear
  }

  // Returns the team's official nickname
  get nickname () {
    return this._nickname
  }
  */
}

export class ScoutyEvent {
/**
   * This creates an Event, where we store the name of the event, the dates, the city, and the website
   *
   * @param {any} baTeamJson
   */
  constructer (baEventJson) {
    this.key = baEventJson.key
    this.name = baEventJson.name
    this.eventCode = baEventJson.event_code
    this.eventType = baEventJson.event_type
    this.startDate = baEventJson.start_date
    this.endDate = baEventJson.end_date
    this.year = baEventJson.year
    this.city = isStrEmpty(baEventJson.city) ? '' : baEventJson.city
    this.stateProv = isStrEmpty(baEventJson.stateProv) ? '' : baEventJson.state_prov
    this.country = isStrEmpty(baEventJson.country) ? '' : baEventJson.country
    this.eventTypeString = baEventJson.event_type_string
    this.website = isStrEmpty(baEventJson.website) ? '' : baEventJson.website
  }
  /*
  // Returns the event key
  get key () {
    return this._key
  }

  // Returns the name of the event.
  get name () {
    return this._name
  }

  // Returns the code of the event.
  get eventCode () {
    return this._eventCode
  }

  // Returns the type of event.
  get eventType () {
    return this._eventType
  }

  // Returns the time that the event starts in yyyy-mm-dd form.
  get startDate () {
    return this._startDate
  }

  // Returns the time that the event ends in yyyy-mm-dd format.
  get endDate () {
    return this._endDate
  }

  // Returns the year of the event.
  get year () {
    return this._year
  }

  // Returns the city in which the event takes place.
  get city () {
    return !isStrEmpty(this._city) ? this._city : ''
  }

  // Returns the state where the event takes place.
  get stateProv () {
    return !isStrEmpty(this._stateProv) ? this._stateProv : ''
  }

  // Returns the country in which the event takes place.
  get country () {
    return !isStrEmpty(this._country) ? this._country : ''
  }

  // Returns the type of event in string form.
  get eventTypeString () {
    return this._eventTypeString
  }

  // Returns the website of the event.
  get website () {
    return !isStrEmpty(this._website) ? this._website : ''
  }
  */
}

export class ScoutyMatchAlliance {
  constructor (baMatchAllianceJson) {
    this.score = baMatchAllianceJson.score
    this.teamKeys = baMatchAllianceJson.team_keys
    this.surrogateTeamKeys = baMatchAllianceJson.surrogate_team_keys
    this.dqTeamKeys = baMatchAllianceJson.dq_team_keys
  }

  /*
  // Returns the score of the alliance. Null or -1 is an unplayed match.
  get score () {
    return this._score
  }

  // Returns the team keys.
  get teamKeys () {
    return this._teamKeys
  }

  // Returns the keys of any team playing as a surrogate
  get surrgateTeamKeys () {
    return this._surrgateTeamKeys
  }

  // Returns the keys of any disqualified teams.
  get dqTeamKeys () {
    return this._dqTeamKeys
  }
  */
}

export class ScoutyMatch {
  /**
   * This puts the blue alliance json returned to an easily used class.
   * @param {any} baMatchJson
   */
  constructor (baMatchJson) {
    this.key = baMatchJson._key
    this.compLevel = baMatchJson._comp_level
    this.setNumber = baMatchJson._set_number
    this.matchNumber = baMatchJson._match_number
    this.eventKey = baMatchJson._event_key
    this.winningAlliance = baMatchJson._winning_alliance
    this.redAlliance = new ScoutyMatchAlliance(baMatchJson._alliances['red'])
    this.blueAlliance = new ScoutyMatchAlliance(baMatchJson._alliances['red'])
  }

  /*
  // returns the key
  get key () {
    return this._key
  }

  // returns the competition level
  get compLevel () {
    return this._compLevel
  }

  // returns the set number of playoff matches
  get setNumber () {
    return this._setNumber
  }

  // returns the match number
  get matchNumber () {
    return this._matchNumber
  }

  // returns the event key
  get eventKey () {
    return this._eventKey
  }

  // returns the winning alliance
  get winningAlliance () {
    return this._winningAlliance
  }

  // returns the red alliance
  get redAlliance () {
    return this._redAlliance
  }

  // returns the blue alliance
  get blueAlliance () {
    return this._blueAlliance
  }
  */
}
