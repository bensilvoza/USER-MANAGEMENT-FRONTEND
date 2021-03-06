import * as React from "react";
import {Input} from "baseui/input";
import {DatePicker} from "baseui/datepicker";
import {Select} from "baseui/select";
import {Button, KIND, SHAPE} from "baseui/button";
import {Spinner} from "baseui/spinner";

function Edit(props) {
    // React.useState here...

    return (
        <>
            <div
                style={{
                    borderRight: "3px solid lightgray",
                    height: "100vh",
                    paddingRight: "1rem",
                }}
            >
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <p
                        style={{
                            fontFamily: "Montserrat",
                            fontSize: "2.5rem",
                            fontWeight: "900",
                        }}
                    >
                        Edit
                    </p>
                </div>

                <form onSubmit={props.handleSubmitEditComponent}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "1rem",
                        }}
                    >
                        <p
                            style={{
                                fontFamily: "Montserrat",
                                display: "inline-block",
                            }}
                        >
                            Last Name
                        </p>
                        <Input
                            overrides={{
                                Root: {
                                    style: {width: "20rem", display: "inline-block"},
                                },
                            }}
                            value={props.valueLastname}
                            onChange={props.onChangeLastname}
                        />
                    </div>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "1rem",
                        }}
                    >
                        <p
                            style={{
                                fontFamily: "Montserrat",
                                display: "inline-block",
                            }}
                        >
                            First Name
                        </p>
                        <Input
                            overrides={{
                                Root: {
                                    style: {width: "20rem", display: "inline-block"},
                                },
                            }}
                            value={props.valueFirstname}
                            onChange={props.onChangeFirstname}
                        />
                    </div>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "1rem",
                        }}
                    >
                        <p
                            style={{
                                fontFamily: "Montserrat",
                                display: "inline-block",
                            }}
                        >
                            Middle Name
                        </p>
                        <Input
                            overrides={{
                                Root: {
                                    style: {width: "20rem", display: "inline-block"},
                                },
                            }}
                            value={props.valueMiddlename}
                            onChange={props.onChangeMiddlename}
                        />
                    </div>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "1rem",
                        }}
                    >
                        <p
                            style={{
                                fontFamily: "Montserrat",
                                display: "inline-block",
                            }}
                        >
                            Wallet Address
                        </p>
                        <Input
                            disabled
                            overrides={{
                                Root: {
                                    style: {width: "20rem", display: "inline-block"},
                                },
                            }}
                        />
                    </div>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "1rem",
                        }}
                    >
                        <p
                            style={{
                                fontFamily: "Montserrat",
                                display: "inline-block",
                            }}
                        >
                            Birthday
                        </p>
                        <DatePicker
                            overrides={{
                                InputWrapper: {
                                    style: {width: "20rem", display: "inline-block"},
                                },
                            }}
                            value={props.valueBirthdate}
                            onChange={props.onChangeBirthdate}
                        />
                    </div>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "1rem",
                        }}
                    >
                        <p
                            style={{
                                fontFamily: "Montserrat",
                                display: "inline-block",
                            }}
                        >
                            Email
                        </p>
                        <Input
                            overrides={{
                                Root: {
                                    style: {width: "20rem", display: "inline-block"},
                                },
                            }}
                            type="email"
                            value={props.valueEmail}
                            onChange={props.onChangeEmail}
                        />
                    </div>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "1rem",
                        }}
                    >
                        <p
                            style={{
                                fontFamily: "Montserrat",
                                display: "inline-block",
                            }}
                        >
                            Role
                        </p>

                        <Select
                            overrides={{
                                Root: {
                                    style: {width: "20rem", display: "inline-block"},
                                },
                            }}
                            searchable={false}
                            options={[
                                {id: "STUDENT", color: "student"},
                                {id: "TEACHER", color: "teacher"},
                                {id: "ADMINISTRATOR", color: "administrator"},
                            ]}
                            labelKey="id"
                            valueKey="color"
                            value={props.valueRole}
                            onChange={props.onChangeRole}
                        />
                    </div>

                    <div>
                        <Button type="submit" onClick={props.cancelButton} kind={KIND.secondary} shape={SHAPE.pill}>
                            Cancel
                        </Button>

                        <Button type="submit" shape={SHAPE.pill}>
                            {props.loading == false ? (
                                <span>Update</span>
                            ) : (
                                <span>
                  <Spinner color="white" size="1rem"/>{" "}
                                    <span style={{marginLeft: ".5rem"}}>Please wait </span>
                </span>
                            )}
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Edit;
