import styled from 'styled-components';

export const Loading = styled.span`
    color: #fff;
    font-size: 30px;
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const Owner = styled.header`
    display:flex;
    flex-direction: column;
    align-items: center;

    a {
        color: 7159c1;
        font-size: 16px;
        text-decoration: none;
    }

    img {
        height: 120px;
        width: 120px;
        border-radius: 50%;
        margin-top: 20px;
    }

    h1 {
        font-size: 24px;
        margin-top: 10px;
    }

    p {
        margin-top: 5px;
        font-size: 14px;
        color: #666;
        line-height: 1.4;
        text-align: center;
        max-width: 400px;
    }
`;

export const IssueList = styled.ul`
    padding-top: 30px;
    margin-top: 30px;
    border-top: 1px solid #eee;
    list-style: none;

    li {
        display: flex;
        flex-direction: row;
        padding: 15px 10px;
        border: 1px solid #eee;
        border-radius: 4px;

        & + li {
            margin-top: 10px;
        }

        img {
            height: 45px;
            width: 45px;

            border-radius: 50%;
            border: 2px solid #eee;
        }

        div {
           flex: 1;
           margin-left: 15px;

           strong {
               font-size: 16px;

               a {
                   text-decoration: none;
                   color: #333;

                   &:hover {
                       color: #7159c1;
                   }
               }

               span {
                   background: #808080;
                   color: #fff;
                   border-radius: 2px;
                   font-size: 12px;
                   font-weight: 600;
                   height: 20px;
                   padding: 3px 4px;
                   margin-left: 10px;

                   & + span {
                        background: #7159c1;
                        color: #fff;
                   }
               }
           }

           p {
               margin-top: 5px;
               font-size: 12px;
               color: #999;
           }
        }
    }
`;

export const IssueFilter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 15px;

    button {
        color: #333;
        background: #fff;
        border: 0;
        padding-bottom: 5px;

        &:nth-child(${props => props.active + 1}){
            color: #7159c1;
            border-bottom: 1px solid #7159c1;
        }
    }
`;

export const PageActions = styled.div`
    margin-top: 15px;
    font-size: 12px;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    button {
        padding: 8px;
        outline: 0;
        border: 0;
        background: #7159c1;
        color: #fff;
        border-radius: 4px;
        transition: opacity 0.25s ease-out;

        &:disabled {
            opacity: 0.50;
            cursor: not-allowed;
        }
    }
`;

export const NoIssues = styled.span`
    display: flex;
    justify-content: center;

    margin-top: 30px;
    padding-top: 30px;
    border-top: 1px solid #eee;

    font-weight: bold;
    font-size: 14px;
`;
